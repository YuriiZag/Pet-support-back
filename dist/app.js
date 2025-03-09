"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const errorMiddleware_1 = __importDefault(require("./midlleware/errorMiddleware"));
const authRouter_1 = __importDefault(require("./routes/api/authRouter"));
const newsRouter_1 = __importDefault(require("./routes/api/newsRouter"));
const petsRouter_1 = __importDefault(require("./routes/api/petsRouter"));
const servicesRouter_1 = __importDefault(require("./routes/api/servicesRouter"));
const noticeRouter_1 = __importDefault(require("./routes/api/noticeRouter"));
dotenv.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'https://yuriizag.github.io' }));
app.use(express_1.default.static("public"));
app.use(errorMiddleware_1.default);
app.use("/user", authRouter_1.default);
app.use("/notices", noticeRouter_1.default);
app.use("/news", newsRouter_1.default);
app.use("/pets", petsRouter_1.default);
app.use("/services", servicesRouter_1.default);
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
app.use((_, res, __) => {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
        data: "Not found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map