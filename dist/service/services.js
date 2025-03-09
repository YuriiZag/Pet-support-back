"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServices = void 0;
const servicesSchema_1 = __importDefault(require("../db/mongoSchemas/servicesSchema"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const getServices = async () => {
    const services = await servicesSchema_1.default.find({});
    if (!services) {
        throw new httpError_1.default(404, "services not found");
    }
    return services;
};
exports.getServices = getServices;
//# sourceMappingURL=services.js.map