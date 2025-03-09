"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncWrapper = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch(next);
    };
};
exports.default = asyncWrapper;
//# sourceMappingURL=asyncWrapper.js.map