import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper.ts";
import authMiddleware from "../../midlleware/authMiddleware.ts";
import { getPetsController, addPetsController, deletePetController } from "../../controller/petController.ts";

const router = express.Router()

router.get('/', authMiddleware, asyncWrapper(getPetsController));
router.post('/', authMiddleware, asyncWrapper(addPetsController));
router.delete('/:id', authMiddleware, asyncWrapper(deletePetController));

export default router