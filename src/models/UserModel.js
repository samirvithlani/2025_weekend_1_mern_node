const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        trim:true,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    userStatus:{
        type:String,
        enum:["Active","Not Active"],
        default:"Active"
    }
},{timestamps:true})
module.exports = mongoose.model("users",userSchema)