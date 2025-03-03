import User from "../db/mongoSchemas/userSchema.ts";
import HttpError from "../helpers/httpError.ts";
import jwt from "jsonwebtoken";
export const register = async (body) => {
    const { email, name, password, city, phoneNumber } = body;
    const emailInUse = await User.findOne({ email });
    if (emailInUse) {
        throw new HttpError(409, "email already in use");
    }
    const user = new User({
        name: name,
        email: email,
        password: password,
        city: city,
        phoneNumber: phoneNumber,
        avatar: "",
    });
    await user.save();
    return user;
};
export const login = async (body) => {
    const salt = process.env.JWT_SALT;
    if (!salt) {
        throw new Error("JWT_SALT is not defined in the environment variables.");
    }
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new HttpError(404, `user with email addres ${email} does not exist`);
    }
    if (user.password !== password) {
        throw new HttpError(401, `wrong password`);
    }
    const token = jwt.sign({
        userId: user._id,
        email: user.email,
    }, salt);
    user.token = token;
    user.save();
    return { token, email: user.email, userName: user.name };
};
export const current = async (user) => {
    const searchedUser = await User.findById(user.userId);
    if (!searchedUser) {
        throw new HttpError(401);
    }
    const currentUser = {
        id: searchedUser._id,
        name: searchedUser.name,
        email: searchedUser.email,
        city: searchedUser.city,
        phoneNumber: searchedUser.phoneNumber,
        ownNoticeId: searchedUser.ownNoticeId,
        petId: searchedUser.petId,
        favouriteNoticeId: searchedUser.favouriteNoticeId,
        avatar: searchedUser.avatar,
        birthday: searchedUser.birthday,
    };
    return currentUser;
};
export const logout = async (user) => {
    await User.findByIdAndUpdate({ _id: user.userId }, {
        token: "",
    });
    if (!updateUser) {
        throw new HttpError(401);
    }
};
export const updateUser = async (user, body) => {
    const updateUser = await User.findByIdAndUpdate({ _id: user.userId }, { $set: body }, { new: true });
    if (!updateUser) {
        throw new HttpError(401);
    }
    return updateUser;
};
