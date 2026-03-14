const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//schema class object..
const productSchema = new Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productStock:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("products",productSchema)
//mongoose.model("products",productSchema)
//("products") -->connected database products --> table
// product schema

//eg db.products.find()
//productSchema.find()