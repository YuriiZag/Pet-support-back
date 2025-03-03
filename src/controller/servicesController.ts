import { Request, Response } from "express";
import { getServices } from "../service/services.ts";

export const servicesController = async (req: Request, res: Response) => {
    const service = await getServices();
    res.status(200).json({ service });
  };
