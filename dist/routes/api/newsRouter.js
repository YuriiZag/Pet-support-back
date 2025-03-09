"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asyncWrapper_1 = __importDefault(require("../../helpers/asyncWrapper"));
const newsController_1 = require("../../controller/newsController");
const router = express_1.default.Router();
router.get('/', (0, asyncWrapper_1.default)(newsController_1.newsController));
exports.default = router;
//# sourceMappingURL=newsRouter.js.map