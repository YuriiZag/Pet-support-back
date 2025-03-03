import mongoose from "mongoose"
import { NewsInterface } from "../../interfaces/newsInterface.ts";

const newsSchema = new mongoose.Schema<NewsInterface>({
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

export default News
