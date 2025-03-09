"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const petSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Set pet`s name"],
    },
    avatar: {
        type: String,
        trim: true,
        required: [true, "Add pet`s avatar"],
    },
    birthDate: {
        type: String,
        trim: true,
        required: [true, "Set pet`s birthday date"],
    },
    breed: {
        type: String,
        trim: true,
        required: [true, "Set pet`s breed"]
    },
    comments: {
        type: String,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
});
const Pet = mongoose_1.default.model("pets", petSchema);
exports.default = Pet;
//# sourceMappingURL=petSchema.js.map