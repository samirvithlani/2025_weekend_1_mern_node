const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//schema class object..
const productSchema = new Schema({

    productName:{
        type:String,
        trim:true

    },
    productPrice:{
        type:Number
    },
    productStock:{
        type:Number,
        required:true
    },
    productSKU:{
        type:String,
        unique:true
    },
    productSize:{
        enum:["S","M","L","XL","XXL"],
        type:String,
    },
    colors:{
        type:[String],
    },
    productStatus:{
        type:String,
        enum:["Active","Inactive","Deleted"],
        default:"Active"
    }
    
})

module.exports = mongoose.model("products",productSchema)
//mongoose.model("products",productSchema)
//("products") -->connected database products --> table
// product schema

//eg db.products.find()
//productSchema.find()