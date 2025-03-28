import express from "express";
import asyncWrapper from "../../helpers/asyncWrapper";
import authMiddleware from "../../midlleware/authMiddleware";
import {
  noticeByIdController,
  noticeByCategoryController,
  noticeByTittleController,
  addNoticeController,
  setFavouriteCobntroller,
  getFavouriteController,
  deletNoticesController,
  getOwnNoticesController,
} from "../../controller/noticeController";

const router = express.Router();

router.get("/title/:title", asyncWrapper(noticeByTittleController));
router.get("/category/:category", asyncWrapper(noticeByCategoryController));
router.get("/id/:id", asyncWrapper(noticeByIdController));
router.post("/", authMiddleware, asyncWrapper(addNoticeController));
router.patch(
  "/favourites",
  authMiddleware,
  asyncWrapper(setFavouriteCobntroller)
);
router.get("/favourites", authMiddleware, asyncWrapper(getFavouriteController));
router.get("/own/", authMiddleware, asyncWrapper(getOwnNoticesController));
router.delete("/own/:id", authMiddleware, asyncWrapper(deletNoticesController));

export default router;
