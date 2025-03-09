"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletOwnNotices = exports.getOwnNotices = exports.getFavouriteNotices = exports.patchFavouriteStatus = exports.addNotice = exports.getNoticesById = exports.getNoticesByCattegory = exports.getNoticesByTittle = void 0;
const noticeSchema_1 = __importDefault(require("../db/mongoSchemas/noticeSchema"));
const userSchema_1 = __importDefault(require("../db/mongoSchemas/userSchema"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const getNoticesByTittle = async (title) => {
    const normilizedTitle = title;
    const notices = await noticeSchema_1.default.find({
        title: { $regex: normilizedTitle, $options: "i" },
    });
    if (!notices) {
        throw new httpError_1.default(404, `Notices with title ${title} not found`);
    }
    return notices;
};
exports.getNoticesByTittle = getNoticesByTittle;
const getNoticesByCattegory = async (category) => {
    if (category === "lost found") {
        category = "lost/found";
    }
    const notices = await noticeSchema_1.default.find({ category: category });
    if (!notices) {
        throw new httpError_1.default(404, `Notices with category ${category} not found`);
    }
    return notices;
};
exports.getNoticesByCattegory = getNoticesByCattegory;
const getNoticesById = async (id) => {
    const notice = await noticeSchema_1.default.findById({ _id: id });
    if (!notice) {
        throw new httpError_1.default(404, `Not found! Notice with id ${id} doesent exist`);
    }
    return notice;
};
exports.getNoticesById = getNoticesById;
const addNotice = async (user, body) => {
    const currentUser = await userSchema_1.default.findById({ _id: user.userId });
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    const newNotice = new noticeSchema_1.default({
        avatar: body.avatar,
        category: body.category,
        title: body.title,
        name: body.name,
        birthDate: body.birthDate,
        breed: body.breed,
        sex: body.sex,
        location: body.location,
        comments: body.comments,
        price: body.price,
        owner: user.userId,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
    });
    await newNotice.save();
    const newNoticeArray = [
        ...currentUser.ownNoticeId,
        newNotice._id.toString(),
    ];
    currentUser.ownNoticeId = newNoticeArray;
    await currentUser.save();
    return newNotice;
};
exports.addNotice = addNotice;
const patchFavouriteStatus = async (user, body) => {
    const notice = await noticeSchema_1.default.findById({ _id: body.id });
    if (!notice) {
        throw new httpError_1.default(404, `Notices with id ${body.id} not found`);
    }
    const currentUser = await userSchema_1.default.findById({ _id: user.userId });
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    if (currentUser.favouriteNoticeId.includes(body.id)) {
        if (body.favouriteStatus === false) {
            const updatedList = currentUser.favouriteNoticeId.filter((noticeId) => noticeId !== body.id);
            currentUser.favouriteNoticeId = updatedList;
            await currentUser.save();
            return currentUser.favouriteNoticeId;
        }
        else {
            throw new httpError_1.default(409, `notice with ${body.id} is not in favourite list`);
        }
    }
    else {
        if (body.favouriteStatus === true) {
            const updatedList = [...currentUser.favouriteNoticeId, body.id];
            currentUser.favouriteNoticeId = updatedList;
            await currentUser.save();
            return updatedList;
        }
        else {
            throw new httpError_1.default(409, `notice with ${body.id} is already in favourite list`);
        }
    }
};
exports.patchFavouriteStatus = patchFavouriteStatus;
const getFavouriteNotices = async (user) => {
    const currentUser = await userSchema_1.default.findById({ _id: user.userId });
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    const favouriteNotices = await noticeSchema_1.default.find({
        _id: { $in: currentUser.favouriteNoticeId },
    });
    if (!favouriteNotices) {
        throw new httpError_1.default(401, "notices not found");
    }
    return favouriteNotices;
};
exports.getFavouriteNotices = getFavouriteNotices;
const getOwnNotices = async (user) => {
    const currentUser = await userSchema_1.default.findById({ _id: user.userId });
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    const ownNotices = await noticeSchema_1.default.find({
        _id: { $in: currentUser.ownNoticeId },
    });
    if (!ownNotices) {
        throw new httpError_1.default(401, "notices not found");
    }
    return ownNotices;
};
exports.getOwnNotices = getOwnNotices;
const deletOwnNotices = async (user, id) => {
    const currentUser = await userSchema_1.default.findById({ _id: user.userId });
    if (!currentUser) {
        throw new httpError_1.default(401, "User not found");
    }
    if (currentUser.ownNoticeId.includes(id)) {
        await noticeSchema_1.default.findByIdAndDelete({ _id: id });
        const newOwnNoticeArray = currentUser.ownNoticeId.filter((noticeId) => noticeId !== id);
        currentUser.ownNoticeId = newOwnNoticeArray;
        currentUser.save();
        return id;
    }
    else {
        throw new httpError_1.default(404, `notice with id ${id} does not exist`);
    }
};
exports.deletOwnNotices = deletOwnNotices;
//# sourceMappingURL=notice.js.map