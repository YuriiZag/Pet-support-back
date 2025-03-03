import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper";
import { servicesController } from "../../controller/servicesController";
const router = express.Router();
router.get('/', asyncWrapper(servicesController));
export default router;
