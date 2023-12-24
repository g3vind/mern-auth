// models are rules that need to be satisfied to add data into the db
import mongoose from "mongoose";

// Schema : rules and conditions

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // time of creation and edit of each user
);

// -------------MODEL-----------------------
const User = mongoose.model("User", userSchema);

export default User;
