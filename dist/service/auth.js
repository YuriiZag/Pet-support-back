"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.logout = exports.current = exports.login = exports.register = void 0;
const userSchema_1 = __importDefault(require("../db/mongoSchemas/userSchema"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (body) => {
    const { email, name, password, city, phoneNumber } = body;
    const emailInUse = await userSchema_1.default.findOne({ email });
    if (emailInUse) {
        throw new httpError_1.default(409, "email already in use");
    }
    const user = new userSchema_1.default({
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
exports.register = register;
const login = async (body) => {
    const salt = process.env.JWT_SALT;
    if (!salt) {
        throw new Error("JWT_SALT is not defined in the environment variables.");
    }
    const { email, password } = body;
    const user = await userSchema_1.default.findOne({ email });
    if (!user) {
        throw new httpError_1.default(404, `user with email addres ${email} does not exist`);
    }
    if (user.password !== password) {
        throw new httpError_1.default(401, `wrong password`);
    }
    const token = jsonwebtoken_1.default.sign({
        userId: user._id,
        email: user.email,
    }, salt);
    user.token = token;
    user.save();
    return { token, email: user.email, userName: user.name };
};
exports.login = login;
const current = async (user) => {
    const searchedUser = await userSchema_1.default.findById(user.userId);
    if (!searchedUser) {
        throw new httpError_1.default(401);
    }
    const currentUser = {
        _id: searchedUser._id,
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
exports.current = current;
const logout = async (user) => {
    await userSchema_1.default.findByIdAndUpdate({ _id: user.userId }, {
        token: "",
    });
    if (!exports.updateUser) {
        throw new httpError_1.default(401);
    }
};
exports.logout = logout;
const updateUser = async (user, body) => {
    const updateUser = await userSchema_1.default.findByIdAndUpdate({ _id: user.userId }, { $set: body }, { new: true });
    if (!updateUser) {
        throw new httpError_1.default(401);
    }
    return updateUser;
};
exports.updateUser = updateUser;
//# sourceMappingURL=auth.js.map