import Notice from "../db/mongoSchemas/noticeSchema.ts";
import User from "../db/mongoSchemas/userSchema.ts";
import HttpError from "../helpers/httpError.ts";
export const getNoticesByTittle = async (title) => {
    const normilizedTitle = title;
    const notices = await Notice.find({
        title: { $regex: normilizedTitle, $options: "i" },
    });
    if (!notices) {
        throw new HttpError(404, `Notices with title ${title} not found`);
    }
    return notices;
};
export const getNoticesByCattegory = async (category) => {
    if (category === "lost found") {
        category = "lost/found";
    }
    const notices = await Notice.find({ category: category });
    if (!notices) {
        throw new HttpError(404, `Notices with category ${category} not found`);
    }
    return notices;
};
export const getNoticesById = async (id) => {
    const notice = await Notice.findById({ _id: id });
    if (!notice) {
        throw new HttpError(404, `Not found! Notice with id ${id} doesent exist`);
    }
    return notice;
};
export const addNotice = async (user, body) => {
    const currentUser = await User.findById({ _id: user.userId });
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    const newNotice = new Notice({
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
export const patchFavouriteStatus = async (user, body) => {
    const notice = await Notice.findById({ _id: body.id });
    if (!notice) {
        throw new HttpError(404, `Notices with id ${body.id} not found`);
    }
    const currentUser = await User.findById({ _id: user.userId });
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    if (currentUser.favouriteNoticeId.includes(body.id)) {
        if (body.favouriteStatus === false) {
            const updatedList = currentUser.favouriteNoticeId.filter((noticeId) => noticeId !== body.id);
            currentUser.favouriteNoticeId = updatedList;
            await currentUser.save();
            return currentUser.favouriteNoticeId;
        }
        else {
            throw new HttpError(409, `notice with ${body.id} is not in favourite list`);
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
            throw new HttpError(409, `notice with ${body.id} is already in favourite list`);
        }
    }
};
export const getFavouriteNotices = async (user) => {
    const currentUser = await User.findById({ _id: user.userId });
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    const favouriteNotices = await Notice.find({
        _id: { $in: currentUser.favouriteNoticeId },
    });
    if (!favouriteNotices) {
        throw new HttpError(401, "notices not found");
    }
    return favouriteNotices;
};
export const getOwnNotices = async (user) => {
    const currentUser = await User.findById({ _id: user.userId });
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    const ownNotices = await Notice.find({
        _id: { $in: currentUser.ownNoticeId },
    });
    if (ownNotices) {
        throw new HttpError(401, "notices not found");
    }
    return ownNotices;
};
export const deletOwnNotices = async (user, id) => {
    const currentUser = await User.findById({ _id: user.userId });
    if (!currentUser) {
        throw new HttpError(401, "User not found");
    }
    if (currentUser.ownNoticeId.includes(id)) {
        await Notice.findByIdAndDelete({ _id: id });
        const newOwnNoticeArray = currentUser.ownNoticeId.filter((noticeId) => noticeId !== id);
        currentUser.ownNoticeId = newOwnNoticeArray;
        currentUser.save();
        return id;
    }
    else {
        throw new HttpError(404, `notice with id ${id} does not exist`);
    }
};
