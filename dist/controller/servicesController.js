"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesController = void 0;
const services_1 = require("../service/services");
const servicesController = async (req, res) => {
    const service = await (0, services_1.getServices)();
    res.status(200).json({ service });
};
exports.servicesController = servicesController;
//# sourceMappingURL=servicesController.js.map