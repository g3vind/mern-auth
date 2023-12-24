import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

// connecting to mongodb databse
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`connected to mongodb🚀`);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const app = express();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});

// -------TEST API ROUTE--------------
app.use("/api/user", userRoutes);
