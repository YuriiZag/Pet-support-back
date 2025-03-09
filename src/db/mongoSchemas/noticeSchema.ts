import mongoose from "mongoose"
import { NoticeInterface } from "../../interfaces/noticeIntefaces";

const noticeSchema = new mongoose.Schema<NoticeInterface>({
  category: {
    type: String,
    enum: ["sell", "lost/found", "in good hands"],
    required: [true, "Chose notice category"],
  },
  title: {
    type: String,
    trim: true,
    required: [true, "Set notice title"],
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Set pet name"],
  },
  birthDate: {
    type: String,
    trim: true,
    required: [true, "Set pet birthday date"],
  },
  breed: {
    type: String,
    trim: true,
    required: [true, "Set pet breed"],
  },
  sex: {
    type: String,
    trim: true,
    enum: ["male", "female"],
    required: [true, "Choose pet sex"],
  },
  avatar: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    required: [true, "Set location"],
  },
  comments: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
  },
  owner: {
    type: String,
    trim: true,
    required: true,
  },
  email: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
});

const Notice = mongoose.model("notices", noticeSchema);

export default Notice