import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {user} from '../Models/user.js'
 
dotenv.config();

const userauth = Router();

userauth.post('/signup',async(req,res)=>{
    try{       
        const { UserRole,FullName,Email,Phonenumber,Password } = req.body;
        console.log(FullName);
    
        const newPassword =await bcrypt.hash(Password,10);
        console.log(newPassword);
        const existinguser = await user.findOne({email:Email})
        if(existinguser){
            res.status(401).send("User already exit");
        }
        else{
            const newuser = new user({
                userRole:UserRole,
                name:FullName,
                email:Email,
                phone:Phonenumber,
                password:newPassword
            });
            await newuser.save();
            res.status(201).send("Signed-up successfully")
        }}
    catch{
        res.status(500).send("Internal Server error");
    }    
})

userauth.post('/login',async(req,res)=>{
    try{
        const {Email,Password}=req.body;
        const result = await user.findOne({email:Email});
        if(!result){
            res.status(400).send("Enter a valid user email");
        }
        else{
            console.log(result.password);
            const valid =await bcrypt.compare(Password,result.password);
            console.log(valid);
            if(valid){
                const token = jwt.sign({Email:Email,UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'4h'});
                console.log(token);
                res.cookie('authToken',token,
                {
                    httpOnly:true
                });
                res.status(200).json({message:"Logged in successfully"});
            }
            else{
                res.status(401).json({message:"Unauthorized access"});
            }
         }
    }
    catch{
        res.status(500).json({message:"Internal Server Error"})
    }
})

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken');
    console.log("User logged out successfully");
    res.status(200).json({msg:"Successfully logged out"})
})


export {userauth};