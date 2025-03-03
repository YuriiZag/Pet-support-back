import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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
const User = mongoose.model("users", userSchema);
export default User;
