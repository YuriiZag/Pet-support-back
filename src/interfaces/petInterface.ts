import {Document, Types} from "mongoose"

export interface PetInterface extends Document{
    _id: Types.ObjectId;
    avatar: string;
    name: string; 
    birthDate: string;
    breed: string;
    comments: string;
    owner: string;
}