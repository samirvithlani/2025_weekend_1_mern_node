require("dotenv").config() //.env file load..
const express = require("express")
//express -->referance...
const app = express() 

const dbConnection= require("./src/utils/DBConnection")
dbConnection() //db connnection function call..
app.use(express.json()) //allowing data type as json "ALSO"



const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
//app.use(productRoutes)
app.use("/product",productRoutes)


const categoryRoutes = require("./src/routes/CategoryRoutes")

app.use("/category",categoryRoutes)



//server calling..
//port variable dec
//const PORT = 3000

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})