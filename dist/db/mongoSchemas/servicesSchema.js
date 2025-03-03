import mongoose from "mongoose";
const servicesSchema = new mongoose.Schema({
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
export default Services;
