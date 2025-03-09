"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asyncWrapper_1 = __importDefault(require("../../helpers/asyncWrapper"));
const authMiddleware_1 = __importDefault(require("../../midlleware/authMiddleware"));
const petController_1 = require("../../controller/petController");
const router = express_1.default.Router();
router.get('/', authMiddleware_1.default, (0, asyncWrapper_1.default)(petController_1.getPetsController));
router.post('/', authMiddleware_1.default, (0, asyncWrapper_1.default)(petController_1.addPetsController));
router.delete('/:id', authMiddleware_1.default, (0, asyncWrapper_1.default)(petController_1.deletePetController));
exports.default = router;
//# sourceMappingURL=petsRouter.js.map