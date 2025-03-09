"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    avatar: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Set user name"],
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Set user email"],
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Set user password"],
    },
    birthday: { type: String, trim: true },
    city: {
        type: String,
        trim: true,
        required: [true, "Set location"],
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: [true, "Set user phone number"],
    },
    ownNoticeId: {
        type: [String],
        trim: true,
        default: [],
    },
    favouriteNoticeId: {
        type: [String],
        trim: true,
        default: [],
    },
    petId: {
        type: [String],
        trim: true,
        default: [],
    },
    token: {
        type: String,
        trim: true,
    },
});
const User = mongoose_1.default.model("users", userSchema);
exports.default = User;
//# sourceMappingURL=userSchema.js.map