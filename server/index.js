import express,{json} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Routes from './Routes/Routes.js';
import userAuth from './Routes/userAuth.js';

dotenv.config();
 
const app=express();

app.use(cors({
    origin:"*",
    credentials:true
}))

app.use(json())
app.use(cookieParser());

app.use('/',userAuth);
app.use('/',Routes);

mongoose.connect('mongodb://localhost:27017/Book_Haven').then(()=>{
    console.log("Mongodb connected Successfully to Library Management System");})
    .catch((error)=>{
        console.error("Mongodb connection failed",error);
});

app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});