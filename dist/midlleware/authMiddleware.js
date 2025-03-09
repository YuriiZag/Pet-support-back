"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const httpError_1 = __importDefault(require("../helpers/httpError"));
const authMiddleware = (req, res, next) => {
    if (!req.headers["auth"]) {
        next(new httpError_1.default(401));
    }
    const token = String(req.headers.auth).split(" ")[1];
    if (token) {
        try {
            if (!process.env.JWT_SALT) {
                throw new Error("JWT secret is missing in environment variables");
            }
            const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SALT);
            req.user = user;
            next();
        }
        catch (error) {
            throw new httpError_1.default(401);
        }
    }
    else {
        throw new httpError_1.default(401);
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map