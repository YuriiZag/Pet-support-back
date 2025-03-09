import { Request, Response } from "express";
import { getNews } from "../service/news";


export const newsController = async (req: Request, res: Response) => {
    const news = await getNews();
    res.status(200).json({ news });
  };

