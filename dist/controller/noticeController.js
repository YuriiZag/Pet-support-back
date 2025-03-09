"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletNoticesController = exports.getOwnNoticesController = exports.getFavouriteController = exports.setFavouriteCobntroller = exports.addNoticeController = exports.noticeByCategoryController = exports.noticeByTittleController = exports.noticeByIdController = void 0;
const notice_1 = require("../service/notice");
const noticeByIdController = async (req, res) => {
    const notices = await (0, notice_1.getNoticesById)(req.params.id);
    res.status(200).json({ notices });
};
exports.noticeByIdController = noticeByIdController;
const noticeByTittleController = async (req, res) => {
    const notices = await (0, notice_1.getNoticesByTittle)(req.params.title);
    res.status(200).json({ notices });
};
exports.noticeByTittleController = noticeByTittleController;
const noticeByCategoryController = async (req, res) => {
    const notices = await (0, notice_1.getNoticesByCattegory)(req.params.category);
    console.log(notices);
    res.status(200).json({ notices });
};
exports.noticeByCategoryController = noticeByCategoryController;
const addNoticeController = async (req, res) => {
    const newNotice = await (0, notice_1.addNotice)(req.user, req.body);
    res.status(200).json({ newNotice });
};
exports.addNoticeController = addNoticeController;
const setFavouriteCobntroller = async (req, res) => {
    const favouriteList = await (0, notice_1.patchFavouriteStatus)(req.user, req.body);
    res.status(200).json({ favouriteList });
};
exports.setFavouriteCobntroller = setFavouriteCobntroller;
const getFavouriteController = async (req, res) => {
    const notices = await (0, notice_1.getFavouriteNotices)(req.user);
    res.status(200).json({ notices });
};
exports.getFavouriteController = getFavouriteController;
const getOwnNoticesController = async (req, res) => {
    const notices = await (0, notice_1.getOwnNotices)(req.user);
    res.status(200).json({ notices });
};
exports.getOwnNoticesController = getOwnNoticesController;
const deletNoticesController = async (req, res) => {
    const deletedNotice = await (0, notice_1.deletOwnNotices)(req.user, req.params.id);
    res.status(200).json({
        message: `notice with id ${deletedNotice} has been successfully deleted`,
    });
};
exports.deletNoticesController = deletNoticesController;
//# sourceMappingURL=noticeController.js.map