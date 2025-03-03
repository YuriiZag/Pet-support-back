import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper.ts";
import { newsController } from "../../controller/newsController.ts";


const router = express.Router()

router.get('/', asyncWrapper(newsController));

export default router