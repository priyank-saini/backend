// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connect_Db from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
})

connect_Db()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
        app.on('error', (error) => {
            console.log("Error: ", error)
            throw error
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed: ", error)
    })

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