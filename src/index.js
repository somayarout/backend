import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at PORT ${process.env.PORT || 3000}`);
        
    })
}).catch((err)=>{
    console.log("MONGODB connection failed");
    
})

















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