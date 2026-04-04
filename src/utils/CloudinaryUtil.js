const cloudinary = require("cloudinary").v2;
require("dotenv").config()
const uploadToCloudinary =async (path)=>{

    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET
    })

    const res = await cloudinary.uploader.upload(path)
    return res;

}
module.exports = uploadToCloudinary