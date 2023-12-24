import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //   Using bcryptjs to hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ messgae: "User Created Successfully" });
  } catch (error) {
    next(error);
  }
};
