import {Document, Types} from "mongoose"

export interface NewsInterface extends Document{
  _id: Types.ObjectId;
  title: string;
  date: string;
  content: string;
  avatar: string;
}
