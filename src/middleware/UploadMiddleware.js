const multer = require("multer")

//where -->copy -->name-->
const storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

//multer object
const upload = multer({
    storage:storage,    
})
module.exports = upload
//multer no need to provide next()
