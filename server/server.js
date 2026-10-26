const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app=express();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongoDB connected.");
}).catch((error)=>{
    console.log("mongoDB connection failed: ",error);
});

app.get("/api/health", (req,res)=>{
    res.json({msg:"server is running"});
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});