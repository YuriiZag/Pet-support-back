import mongoose from "mongoose"
import { ServiceInterface } from "../../interfaces/servicInterface.ts";

const servicesSchema = new mongoose.Schema<ServiceInterface>({
  serviceName: {
    type: String,
    trim: true,
  },
  workingTime: {
    type: Object,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
});

const Services = mongoose.model("services", servicesSchema);

export default Services