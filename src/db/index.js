import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { DB_NAME } from "../constrants.js";

const connectDB = async () => {
    try {
        console.log("MongoDB URL:", process.env.MONGODB_URL); // Debugging
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1);
    }
};

export default connectDB;