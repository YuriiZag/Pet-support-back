import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Set pet`s name"],
    },
    avatar: {
        type: String,
        trim: true,
        required: [true, "Add pet`s avatar"],
    },
    birthDate: {
        type: String,
        trim: true,
        required: [true, "Set pet`s birthday date"],
    },
    breed: {
        type: String,
        trim: true,
        required: [true, "Set pet`s breed"]
    },
    comments: {
        type: String,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
});
const Pet = mongoose.model("pets", petSchema);
export default Pet;
