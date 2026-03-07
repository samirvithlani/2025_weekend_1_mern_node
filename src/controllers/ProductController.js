const productSchema = require("../models/ProductModel")

//api -->function 
const getAllProducts =async(req,res)=>{

    //database record --> connected---> table --> products == productSchema
    const allproducts = await productSchema.find()
    res.json({
        message:"products fetched..",
        data:allproducts
    })

}
module.exports ={
    getAllProducts
}
