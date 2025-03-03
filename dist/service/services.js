import Services from "../db/mongoSchemas/servicesSchema";
import HttpError from "../helpers/httpError";
export const getServices = async () => {
    const services = await Services.find({});
    if (!services) {
        throw new HttpError(404, "services not found");
    }
    return services;
};
