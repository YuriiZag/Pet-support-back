import { Document, Types } from "mongoose";

export interface NoticeInterface extends Document{ 
    _id: Types.ObjectId;
    avatar: string;
    category: string;
    title: string;
    name: string;
    birthDate: string;
    breed: string;
    sex: string;
    location: string;
    comments: string;
    price: string;
    owner: string;
    email: string;
    phoneNumber: string;
}
