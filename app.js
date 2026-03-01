const express = require("express")
//express -->referance...
const app = express() 

//routes
const userRoutes = require("./src/routes/UserRoutes")
//bind with express
app.use(userRoutes)



//server calling..
//port variable dec
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})