"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePetController = exports.addPetsController = exports.getPetsController = void 0;
const pet_1 = require("../service/pet");
const getPetsController = async (req, res) => {
    const pets = await (0, pet_1.getPets)(req.user);
    res.status(200).json({ pets });
};
exports.getPetsController = getPetsController;
const addPetsController = async (req, res) => {
    const pet = await (0, pet_1.addPet)(req.user, req.body);
    res.status(200).json({ pet });
};
exports.addPetsController = addPetsController;
const deletePetController = async (req, res) => {
    const pet = await (0, pet_1.deletePet)(req.user, req.params.id);
    res
        .status(200)
        .json({
        message: `Succes! pet with id ${req.body.id} succesfully deleted`,
    });
};
exports.deletePetController = deletePetController;
//# sourceMappingURL=petController.js.map