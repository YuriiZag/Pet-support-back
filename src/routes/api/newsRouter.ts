import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper";
import { newsController } from "../../controller/newsController";


const router = express.Router()

router.get('/', asyncWrapper(newsController));

export default router