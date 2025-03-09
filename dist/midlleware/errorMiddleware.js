"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res, next) => {
    if (!error.message) {
        error.message = 'http error';
    }
    res.status(500).json({ message: error.message });
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map