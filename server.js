import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, () => {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
