import Services from "../db/mongoSchemas/servicesSchema.ts";
import HttpError from "../helpers/httpError.ts";
import { ServiceInterface } from "../interfaces/servicInterface.ts";

export const getServices = async () => {
    const services: ServiceInterface[] | null = await Services.find({})
    if (!services) {
      throw new HttpError(404, "services not found")
    }

    return services;
  };
