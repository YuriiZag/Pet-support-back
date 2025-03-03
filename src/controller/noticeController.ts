import { Request, Response } from "express";
import { AuthRequest } from "../interfaces/authInterface.ts";
import {
  getNoticesById,
  getNoticesByTittle,
  getNoticesByCattegory,
  addNotice,
  patchFavouriteStatus,
  getOwnNotices,
  getFavouriteNotices,
  deletOwnNotices,
} from "../service/notice.ts";

export const noticeByIdController = async (req: Request, res: Response) => {
  const notices = await getNoticesById(req.params.id);
  res.status(200).json({ notices });
};

export const noticeByTittleController = async (req: Request, res: Response) => {
  const notices = await getNoticesByTittle(req.params.title);
  res.status(200).json({ notices });
};
export const noticeByCategoryController = async (req: Request, res: Response) => {
  const notices = await getNoticesByCattegory(req.params.category);
  console.log(notices);
  res.status(200).json({ notices });
};

export const addNoticeController = async (req: AuthRequest, res: Response) => {
  const newNotice = await addNotice(req.user, req.body);
  res.status(200).json({ newNotice });
};

export const setFavouriteCobntroller = async (req: AuthRequest, res: Response) => {
  const favouriteList = await patchFavouriteStatus(req.user, req.body);
  res.status(200).json({ favouriteList });
};
export const getFavouriteController = async (req: AuthRequest, res: Response) => {
  const notices = await getFavouriteNotices(req.user); 
  res.status(200).json({ notices });
};

export const getOwnNoticesController = async (req: AuthRequest, res: Response) => {
  const notices = await getOwnNotices(req.user);
  res.status(200).json({ notices });
};

export const deletNoticesController = async (req: AuthRequest, res: Response) => {
  const deletedNotice = await deletOwnNotices(req.user, req.params.id);
  res.status(200).json({
    message: `notice with id ${deletedNotice} has been successfully deleted`,
  });
};


