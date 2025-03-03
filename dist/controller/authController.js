import { register, current, login, logout, updateUser } from "../service/auth.ts";
export const loginController = async (req, res) => {
    const user = await login(req.body);
    res.status(200).json({ user });
};
export const registerController = async (req, res) => {
    const user = await register(req.body);
    res.status(200).json({ user });
};
export const currentController = async (req, res) => {
    const user = await current(req.user);
    res.status(200).json({ user });
};
export const logoutController = async (req, res) => {
    const user = await logout(req.user);
    res.status(200).json({ message: "succes" });
};
export const updateController = async (req, res) => {
    const user = await updateUser(req.user, req.body);
    res.status(200).json({ user });
};
