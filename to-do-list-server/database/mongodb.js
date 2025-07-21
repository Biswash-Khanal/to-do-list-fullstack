import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../config/env.js";


if(!MONGO_URI){
    throw new Error("MONGO_URI is not defined in the environment variables");
}

const connectToDatabase = async () => {
    try {
        console.log("⭑ MONGO_URI:", process.env.MONGO_URI?.slice(0,50) + "…");

        await mongoose.connect(MONGO_URI)
        console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectToDatabase;