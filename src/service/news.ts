import News from "../db/mongoSchemas/newsSchema";
import HttpError from "../helpers/httpError";
import { NewsInterface } from "../interfaces/newsInterface";

export const getNews = async () => {
    const news: NewsInterface[] | null = await News.find({})
    if (!news) {
      throw new HttpError(404, "News not found")
    }

    return news;
  };

