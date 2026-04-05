const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware =require("../middleware/TestMiddleware")
const requestValidator = require("../middleware/RequestValidatorMiddleware")
const userValidationSchema = require("../validationschemas/UserValidationSchema")

router.post("/",requestValidator(userValidationSchema),userController.createUser)
router.post("/login",userController.loginUser)
module.exports  = router