const mongoose = require("mongoose")
const dbConnection = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/2025_mern_weekend_1").then(()=>{
        console.log("DB CONNECTED..")
    }).catch((err)=>{
        console.log("DATABASE CONNECTION FAILED.",err)
    })
}
module.exports = dbConnection