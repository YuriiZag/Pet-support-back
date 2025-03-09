"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnnection = dbConnnection;
const mongoose_1 = __importDefault(require("mongoose"));
async function dbConnnection() {
    try {
        await mongoose_1.default.set("strictQuery", true);
        if (process.env.DB_URL) {
            await mongoose_1.default.connect(process.env.DB_URL);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`mongoDB error: ${error.message}`);
        }
        else {
            console.error("unknown error", error);
        }
        return process.exit(1);
    }
}
//# sourceMappingURL=connection.js.map