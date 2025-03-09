"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = void 0;
const newsSchema_1 = __importDefault(require("../db/mongoSchemas/newsSchema"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const getNews = async () => {
    const news = await newsSchema_1.default.find({});
    if (!news) {
        throw new httpError_1.default(404, "News not found");
    }
    return news;
};
exports.getNews = getNews;
//# sourceMappingURL=news.js.map