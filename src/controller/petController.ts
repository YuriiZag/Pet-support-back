import { Response } from "express";
import { AuthRequest } from "../interfaces/authInterface.ts";
import { getPets, addPet, deletePet } from "../service/pet.ts";


export const getPetsController = async (req: AuthRequest, res: Response) => {
  const pets = await getPets(req.user);
  res.status(200).json({ pets });
};
export const addPetsController = async (req: AuthRequest, res: Response) => {
  const pet = await addPet(req.user, req.body);
  res.status(200).json({ pet });
};
export const deletePetController = async (req: AuthRequest, res: Response) => {
  const pet = await deletePet(req.user, req.params.id);
  res
    .status(200)
    .json({
      message: `Succes! pet with id ${req.body.id} succesfully deleted`,
    });
};

