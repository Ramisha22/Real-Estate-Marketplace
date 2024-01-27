import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = 3001;
import mongoose from "mongoose";
mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.listen(PORT, () => {
  console.log("helo");
});
