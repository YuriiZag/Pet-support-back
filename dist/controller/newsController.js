"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsController = void 0;
const news_1 = require("../service/news");
const newsController = async (req, res) => {
    const news = await (0, news_1.getNews)();
    res.status(200).json({ news });
};
exports.newsController = newsController;
//# sourceMappingURL=newsController.js.map