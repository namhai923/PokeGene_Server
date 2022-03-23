import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import randomPoke from "./routes/randomPoke.js";
import mongoose from "mongoose";

dotenv.config();

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());

mongoose.connect(process.env.DB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use("/randomPoke", randomPoke);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
