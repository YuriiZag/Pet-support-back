import { AuthInterface, UserInterface } from "../interfaces/authInterface";
import { PetInterface } from "../interfaces/petInterface";

import User from "../db/mongoSchemas/userSchema";
import HttpError from "../helpers/httpError";
import Pet from "../db/mongoSchemas/petSchema";

export const getPets = async (user: AuthInterface) => {
  const pets: PetInterface[] | null = await Pet.find({ owner: user.userId });
  if (!pets) {
    throw new HttpError(404, "pet not found");
  }

  return pets;
};

export const addPet = async (user: AuthInterface, body: PetInterface) => {
  const currentUser: UserInterface | null = await User.findById(user.userId);
  if (!currentUser) {
    throw new HttpError(401, "User not found");
  }

  const pet: PetInterface = new Pet({
    avatar: body.avatar,
    name: body.name,
    birthDate: body.birthDate,
    breed: body.breed,
    comments: body.comments,
    owner: user.userId,
  });

  await pet.save();
  const userPets: string[] = [...currentUser.petId, pet._id.toString()];
  currentUser.petId = userPets;
  await currentUser.save();
  return pet;
};

export const deletePet = async (
  user: AuthInterface,
  id: string
) => {
  const pet: PetInterface | null = await Pet.findById({ _id: id });
  if (!pet) {
    throw new HttpError(404, "pet not found");
  }

  if (pet.owner.includes(user.userId)) {
    await Pet.findByIdAndDelete({ _id: id });
  } else {
    throw new HttpError(404, `pet with id ${id} does not exist`);
  }

  const currentUser: UserInterface | null = await User.findById(user.userId);
  if (!currentUser) {
    throw new HttpError(401, "User not found");
  }

  const userPets: string[] = currentUser.petId.filter((petsId: string) => {
    petsId !== id;
  });
  currentUser.petId = userPets;
  await currentUser.save();
  return pet;
};
