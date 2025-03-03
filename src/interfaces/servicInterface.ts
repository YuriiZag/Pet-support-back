import { Document, Types } from "mongoose";

export interface ServiceInterface extends Document {
  _id: Types.ObjectId;
  serviceName: string;
  workingTime: { [key: string]: string };
  address: string;
  email: string;
  phoneNumber: string;
  logo: string;
}
