"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newsSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
        trim: true,
    },
});
const News = mongoose_1.default.model("news", newsSchema);
exports.default = News;
//# sourceMappingURL=newsSchema.js.map