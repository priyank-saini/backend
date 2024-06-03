// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connect_Db from "./db/index.js";
import express from 'express';

const app = express()
dotenv.config({
    path: "./env"
})

connect_Db()

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on('error', (error)=>{
//             console.log("Error: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error
//     }
// })