//routes -->end --> express 
const router = require("express").Router()
const userController = require("../controllers/UserController")
//get("url",function)
//localhost:3000/user
router.get("/user",userController.getUser)
//localhost:3000/users
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

module.exports = router