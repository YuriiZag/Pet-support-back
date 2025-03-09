import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../interfaces/authInterface";
import jwt, { JwtPayload } from "jsonwebtoken";
import HttpError from "../helpers/httpError";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  if (!req.headers["auth"]) {
    next(new HttpError(401));
  }
  const token = String(req.headers.auth).split(" ")[1];

  if (token) {
    try {
      if (!process.env.JWT_SALT) {
        throw new Error("JWT secret is missing in environment variables");
      }

      const user = jwt.verify(token, process.env.JWT_SALT) as JwtPayload;
      (req as AuthRequest).user = user;
      
      next();

    } catch (error) {
      throw new HttpError(401);
    }
  } else {
    throw new HttpError(401);
  }


};

export default authMiddleware;
