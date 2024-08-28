import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./util/db.js";
import cardRoutes from "./routes/card.routes.js";

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json()); //Allow express to parse JSON
app.use(cors(corsOptions)); //Allow cors policies for frontend

// Ping Pong! test api route
app.get("/ping", (req, res) => {
  res.json({ message: "Pong!" });
});

// Cards routes
app.use("/cards", cardRoutes);

// Listen on port and connect to DB
app.listen(port, () => {
  connectDB();
  console.log(`App listening on ${port}`);
});
