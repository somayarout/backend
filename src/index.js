import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()

















/*
import express from "express"
const app = express()
(async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error : ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App listen on PORT ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("Error : ",error)
        throw error
    }
})()
*/