import User from "../db/mongoSchemas/userSchema.ts";
import HttpError from "../helpers/httpError.ts";
import Pet from "../db/mongoSchemas/petSchema.ts";
export const getPets = async (user) => {
    const pets = await Pet.find({ owner: user.userId });
    if (!pets) {
        throw new HttpError(404, "pet not found");
    }
    return pets;
};
export const addPet = async (user, body) => {
    const currentUser = await User.findById(user.userId);
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    const pet = new Pet({
        avatar: body.avatar,
        name: body.name,
        type: body.type,
        birthDate: body.birthDate,
        breed: body.breed,
        comments: body.comments,
        owner: user.userId,
    });
    await pet.save();
    const userPets = [...currentUser.petId, pet._id.toString()];
    currentUser.petId = userPets;
    await currentUser.save();
    return pet;
};
export const deletePet = async (user, id) => {
    const pet = await Pet.findById({ _id: id });
    if (!pet) {
        throw new HttpError(404, "pet not found");
    }
    if (pet.owner.includes(user.userId)) {
        await Pet.findByIdAndDelete({ _id: id });
    }
    else {
        throw new HttpError(404, `pet with id ${id} does not exist`);
    }
    const currentUser = await User.findById(user.userId);
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    const userPets = currentUser.petId.filter((petsId) => {
        petsId !== id;
    });
    currentUser.petId = userPets;
    await currentUser.save();
    return pet;
};
