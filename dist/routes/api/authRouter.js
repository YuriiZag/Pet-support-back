"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../../midlleware/authMiddleware"));
const asyncWrapper_1 = __importDefault(require("../../helpers/asyncWrapper"));
const authController_1 = require("../../controller/authController");
const router = express_1.default.Router();
router.post("/register", (0, asyncWrapper_1.default)(authController_1.registerController));
router.post("/login", (0, asyncWrapper_1.default)(authController_1.loginController));
router.patch("/logout", authMiddleware_1.default, (0, asyncWrapper_1.default)(authController_1.logoutController));
router.get("/current", authMiddleware_1.default, (0, asyncWrapper_1.default)(authController_1.currentController));
router.patch("/update", authMiddleware_1.default, (0, asyncWrapper_1.default)(authController_1.updateController));
exports.default = router;
//# sourceMappingURL=authRouter.js.map