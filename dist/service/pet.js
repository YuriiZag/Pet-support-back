"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.addPet = exports.getPets = void 0;
const userSchema_1 = __importDefault(require("../db/mongoSchemas/userSchema"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const petSchema_1 = __importDefault(require("../db/mongoSchemas/petSchema"));
const getPets = async (user) => {
    const pets = await petSchema_1.default.find({ owner: user.userId });
    if (!pets) {
        throw new httpError_1.default(404, "pet not found");
    }
    return pets;
};
exports.getPets = getPets;
const addPet = async (user, body) => {
    const currentUser = await userSchema_1.default.findById(user.userId);
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    const pet = new petSchema_1.default({
        avatar: body.avatar,
        name: body.name,
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
exports.addPet = addPet;
const deletePet = async (user, id) => {
    const pet = await petSchema_1.default.findById({ _id: id });
    if (!pet) {
        throw new httpError_1.default(404, "pet not found");
    }
    if (pet.owner.includes(user.userId)) {
        await petSchema_1.default.findByIdAndDelete({ _id: id });
    }
    else {
        throw new httpError_1.default(404, `pet with id ${id} does not exist`);
    }
    const currentUser = await userSchema_1.default.findById(user.userId);
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    const userPets = currentUser.petId.filter((petsId) => {
        petsId !== id;
    });
    currentUser.petId = userPets;
    await currentUser.save();
    return pet;
};
exports.deletePet = deletePet;
//# sourceMappingURL=pet.js.map