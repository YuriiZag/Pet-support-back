import { Request } from "express";
import { Document, Types } from "mongoose";

export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface AuthRequest extends Request {
  user?: any;
}

export interface AuthInterface {
  userId: string;
  email: string;
  token: string;
  userName: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  city: string;
  phoneNumber: string;
}

export interface UserInterface extends Document {
  _id: Types.ObjectId;
  email: string;
  name: string;
  token: string;
  password: string;
  city: string;
  phoneNumber: string;
  avatar: string;
  birthday: string;
  petId: string[];
  favouriteNoticeId: string[];
  ownNoticeId: string[];
}
