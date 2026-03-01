const express = require("express")
//express -->referance...
const app = express() 



//server calling..
//port variable dec
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})