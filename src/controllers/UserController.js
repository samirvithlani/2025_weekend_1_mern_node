const userSchema = require("../models/UserModel")
const bcrypt = require("bcrypt")
const mailSend = require("../utils/MailUtil")

const createUser = async(req,res)=>{

    try{

        //req.body.
        const hashedPassword =bcrypt.hashSync(req.body.password,10)
        //const savedUser = await userSchema.create(req.body)
        const savedUser = await userSchema.create({...req.body,password:hashedPassword})
        //mail...
        await mailSend(savedUser.email,"welcome","welcome to portal")
        res.status(201).json({
            message:"user saved Successfully",
            data:savedUser
        })

    }catch(err){

        res.status(500).json({
            message:"error while creating user.."
        })
    }
}

module.exports={
    createUser
}