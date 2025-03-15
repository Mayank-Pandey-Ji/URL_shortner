import mongoose from "mongoose";
import dotenv from "dotenv";
import app from './app.js'

process.on('uncaughtException' ,(err)=>{
    console.log("Uncaught exception !! shutting down ....");
    console.log(err.name , err.message);
    process.exit(1);
})


dotenv.config({path : './config.env'});

const DB = process.env.DATABASE.replace('<db_password>' , process.env.DATABASE_PASSWORD);

mongoose.connect(DB , {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(con =>{
    console.log('DB connection is successfull !');
})


const PORT = process.env.PORT;

// console.log(process.env);

const server = app.listen(PORT , ()=>{
    console.log("app is running on PORT : 3000...")
})

process.on('unhandledRejection' , (err)=>{
    console.log("Unhandled rejection !! shutting down ....");
    console.log(err.name , err.message);
    server.close(() =>{
        process.exit(1);
    })
})

