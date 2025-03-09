import User from "../db/mongoSchemas/userSchema";
import HttpError from "../helpers/httpError";
import {
  UserInterface,
  RegisterInterface,
  LoginInterface,
  AuthInterface,
} from "../interfaces/authInterface";
import jwt   from "jsonwebtoken";

export const register = async (body: RegisterInterface) => {
  const { email, name, password, city, phoneNumber } = body;
  const emailInUse: UserInterface | null = await User.findOne({ email });

  if (emailInUse) {
    throw new HttpError(409, "email already in use");
  }
  const user: UserInterface = new User({
    name: name,
    email: email,
    password: password,
    city: city,
    phoneNumber: phoneNumber,
    avatar: "",
  });
  await user.save();
  return user;
};

export const login = async (body: LoginInterface) => {
  const salt: string | undefined = process.env.JWT_SALT;
  if (!salt) {
    throw new Error("JWT_SALT is not defined in the environment variables.");
  }

  const { email, password } = body;

  const user: UserInterface | null = await User.findOne({ email });
  if (!user) {
    throw new HttpError(404, `user with email addres ${email} does not exist`);
  }
  if (user.password !== password) {
    throw new HttpError(401, `wrong password`);
  }
  const token: string = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    salt
  );
  user.token = token;
  user.save();
  return { token, email: user.email, userName: user.name };
};

export const current = async (user: AuthInterface) => {
  const searchedUser: UserInterface | null = await User.findById(user.userId);
  if (!searchedUser) {
    throw new HttpError(401);
  }
  const currentUser: Partial<UserInterface> = {
    _id: searchedUser._id,
    name: searchedUser.name,
    email: searchedUser.email,
    city: searchedUser.city,
    phoneNumber: searchedUser.phoneNumber,
    ownNoticeId: searchedUser.ownNoticeId,
    petId: searchedUser.petId,
    favouriteNoticeId: searchedUser.favouriteNoticeId,
    avatar: searchedUser.avatar,
    birthday: searchedUser.birthday,
  };
  return currentUser;
};

export const logout = async (user: AuthInterface) => {
  await User.findByIdAndUpdate(
    { _id: user.userId },
    {
      token: "",
    }
  );
  if (!updateUser) {
    throw new HttpError(401);
  }

};

export const updateUser = async (
  user: AuthInterface,
  body: Partial<UserInterface>
) => {
  const updateUser: UserInterface | null = await User.findByIdAndUpdate(
    { _id: user.userId },
    { $set: body },
    { new: true }
  );

  if (!updateUser) {
    throw new HttpError(401);
  }
  return updateUser;
};
