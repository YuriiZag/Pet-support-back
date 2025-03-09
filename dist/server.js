"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_1 = require("./db/connection");
const start = () => {
    app_1.default.listen(3000, () => {
        (0, connection_1.dbConnnection)().catch((err) => console.log(err));
        console.log("Server running. Use our API on port: 3000");
    });
};
start();
//# sourceMappingURL=server.js.map