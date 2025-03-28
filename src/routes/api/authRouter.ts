import express from "express";
import authMiddleware from "../../midlleware/authMiddleware";
import asyncWrapper from "../../helpers/asyncWrapper";
import {
  registerController,
  loginController,
  logoutController,
  currentController,
  updateController,
} from "../../controller/authController";

const router = express.Router();

router.post("/register", asyncWrapper(registerController));
router.post("/login", asyncWrapper(loginController));
router.patch("/logout", authMiddleware, asyncWrapper(logoutController));
router.get("/current", authMiddleware, asyncWrapper(currentController));
router.patch("/update", authMiddleware, asyncWrapper(updateController));

export default router;
