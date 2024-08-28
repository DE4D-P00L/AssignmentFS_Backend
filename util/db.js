import mongoose from "mongoose";

// Util function to connect to Mongoose
export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
    mongoose.connection.bufferCommands = false;
    mongoose.connection.commandTimeout = 30000;
  } catch (error) {
    console.log("Error connecting to DB", error.message);
  }
}
