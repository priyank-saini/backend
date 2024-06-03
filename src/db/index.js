import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config();

const connect_Db = async () => {
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`MongoDB connected, DB host: ${connection_instance.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error", error)
        console.log(process.env.MONGODB_URI)
        process.exit(1)
    }
}

export default connect_Db