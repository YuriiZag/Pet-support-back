import News from "../db/mongoSchemas/newsSchema.ts";
import HttpError from "../helpers/httpError.ts";
export const getNews = async () => {
    const news = await News.find({});
    if (!news) {
        throw new HttpError(404, "News not found");
    }
    return news;
};
