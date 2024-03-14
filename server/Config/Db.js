import mongoose from "mongoose";
import dotEnv from 'dotenv'
dotEnv.config()
export const connectDb = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB Connected");
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };