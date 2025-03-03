import { getNews } from "../service/news.ts";
export const newsController = async (req, res) => {
    const news = await getNews();
    res.status(200).json({ news });
};
