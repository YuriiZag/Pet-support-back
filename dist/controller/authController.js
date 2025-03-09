"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = exports.logoutController = exports.currentController = exports.registerController = exports.loginController = void 0;
const auth_1 = require("../service/auth");
const loginController = async (req, res) => {
    const user = await (0, auth_1.login)(req.body);
    res.status(200).json({ user });
};
exports.loginController = loginController;
const registerController = async (req, res) => {
    const user = await (0, auth_1.register)(req.body);
    res.status(200).json({ user });
};
exports.registerController = registerController;
const currentController = async (req, res) => {
    const user = await (0, auth_1.current)(req.user);
    res.status(200).json({ user });
};
exports.currentController = currentController;
const logoutController = async (req, res) => {
    const user = await (0, auth_1.logout)(req.user);
    res.status(200).json({ message: "succes" });
};
exports.logoutController = logoutController;
const updateController = async (req, res) => {
    const user = await (0, auth_1.updateUser)(req.user, req.body);
    res.status(200).json({ user });
};
exports.updateController = updateController;
//# sourceMappingURL=authController.js.map