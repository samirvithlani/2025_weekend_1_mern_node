const express = require("express")
//express -->referance...
const app = express() 
const dbConnection= require("./src/utils/DBConnection")
dbConnection() //db connnection function call..
app.use(express.json()) //allowing data type as json "ALSO"

//routes
const userRoutes = require("./src/routes/UserRoutes")
//bind with express
app.use(userRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
app.use(productRoutes)




//server calling..
//port variable dec
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})