"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const servicesSchema = new mongoose_1.default.Schema({
    serviceName: {
        type: String,
        trim: true,
    },
    workingTime: {
        type: Object,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    logo: {
        type: String,
        trim: true,
    },
});
const Services = mongoose_1.default.model("services", servicesSchema);
exports.default = Services;
//# sourceMappingURL=servicesSchema.js.map