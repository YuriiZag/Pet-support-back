import { getServices } from "../service/services.ts";
export const servicesController = async (req, res) => {
    const service = await getServices();
    res.status(200).json({ service });
};
