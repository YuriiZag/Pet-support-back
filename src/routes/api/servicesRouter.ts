import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper.ts";
import { servicesController } from "../../controller/servicesController.ts";

const router = express.Router()

router.get('/', asyncWrapper(servicesController));

export default router