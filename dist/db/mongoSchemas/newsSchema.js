import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
        trim: true,
    },
});
const News = mongoose.model("news", newsSchema);
export default News;
