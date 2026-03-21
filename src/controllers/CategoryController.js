const categorySchema = require("../models/CategoryModel")
const createCategory = async(req,res)=>{


    try{

        const savedCategory = await categorySchema.create(req.body)
        res.status(201).json({
            data:savedCategory
        })

    }catch(err){
        res.status(500).json({
            message:"error while creating category.."
        })
    }
    
}
const getAllCategories = async(req,res)=>{


    try{

        const categories = await categorySchema.find();
        res.status(200).json({
            data:categories
        })

    }catch(err){
        res.status(500).json({
            message:"error while etching category.."
        })
    }
    
}

module.exports = {
    createCategory,getAllCategories
}