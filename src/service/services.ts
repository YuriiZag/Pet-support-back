import Services from "../db/mongoSchemas/servicesSchema";
import HttpError from "../helpers/httpError";
import { ServiceInterface } from "../interfaces/servicInterface";

export const getServices = async () => {
    const services: ServiceInterface[] | null = await Services.find({})
    if (!services) {
      throw new HttpError(404, "services not found")
    }

    return services;
  };
