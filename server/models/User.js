const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
    {
        googleId:{
            type:String,
            required:true,
            unique:true
        },

        name:{
            type:String,
            required:true,

        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        profilepicture:{
            type:String
        },
        role:{
            type:String,
            enum:["patient"],
            default:"patient"
        }
    },
    {
        timestamps:true
    }
);
module.exports = mongoose.model("User", userschema);