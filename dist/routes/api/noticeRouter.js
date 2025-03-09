"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asyncWrapper_1 = __importDefault(require("../../helpers/asyncWrapper"));
const authMiddleware_1 = __importDefault(require("../../midlleware/authMiddleware"));
const noticeController_1 = require("../../controller/noticeController");
const router = express_1.default.Router();
router.get("/title/:title", (0, asyncWrapper_1.default)(noticeController_1.noticeByTittleController));
router.get("/category/:category", (0, asyncWrapper_1.default)(noticeController_1.noticeByCategoryController));
router.get("/id/:id", (0, asyncWrapper_1.default)(noticeController_1.noticeByIdController));
router.post("/", authMiddleware_1.default, (0, asyncWrapper_1.default)(noticeController_1.addNoticeController));
router.patch("/favourites", authMiddleware_1.default, (0, asyncWrapper_1.default)(noticeController_1.setFavouriteCobntroller));
router.get("/favourites", authMiddleware_1.default, (0, asyncWrapper_1.default)(noticeController_1.getFavouriteController));
router.get("/own/", authMiddleware_1.default, (0, asyncWrapper_1.default)(noticeController_1.getOwnNoticesController));
router.delete("/own/:id", authMiddleware_1.default, (0, asyncWrapper_1.default)(noticeController_1.deletNoticesController));
exports.default = router;
//# sourceMappingURL=noticeRouter.js.map