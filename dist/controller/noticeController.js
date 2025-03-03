import { getNoticesById, getNoticesByTittle, getNoticesByCattegory, addNotice, patchFavouriteStatus, getOwnNotices, getFavouriteNotices, deletOwnNotices, } from "../service/notice.ts";
export const noticeByIdController = async (req, res) => {
    const notices = await getNoticesById(req.params.id);
    res.status(200).json({ notices });
};
export const noticeByTittleController = async (req, res) => {
    const notices = await getNoticesByTittle(req.params.title);
    res.status(200).json({ notices });
};
export const noticeByCategoryController = async (req, res) => {
    const notices = await getNoticesByCattegory(req.params.category);
    res.status(200).json({ notices });
};
export const addNoticeController = async (req, res) => {
    const newNotice = await addNotice(req.user, req.body);
    res.status(200).json({ newNotice });
};
export const setFavouriteCobntroller = async (req, res) => {
    const favouriteList = await patchFavouriteStatus(req.user, req.body);
    res.status(200).json({ favouriteList });
};
export const getFavouriteController = async (req, res) => {
    const favouriteNotices = await getFavouriteNotices(req.user);
    res.status(200).json({ favouriteNotices });
};
export const getOwnNoticesController = async (req, res) => {
    const ownNotices = await getOwnNotices(req.user);
    res.status(200).json({ ownNotices });
};
export const deletNoticesController = async (req, res) => {
    const deletedNotice = await deletOwnNotices(req.user, req.params.id);
    res.status(200).json({
        message: `notice with id ${deletedNotice} has been successfully deleted`,
    });
};
