import { getPets, addPet, deletePet } from "../service/pet.ts";
export const getPetsController = async (req, res) => {
    const pets = await getPets(req.user);
    res.status(200).json({ pets });
};
export const addPetsController = async (req, res) => {
    const pet = await addPet(req.user, req.body);
    res.status(200).json({ pet });
};
export const deletePetController = async (req, res) => {
    const pet = await deletePet(req.user, req.params.id);
    res
        .status(200)
        .json({
        message: `Succes! pet with id ${req.body.id} succesfully deleted`,
    });
};
