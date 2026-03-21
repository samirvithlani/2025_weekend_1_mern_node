const router = require("express").Router()
const categoryController = require("../controllers/CategoryController")
router.post("/",categoryController.createCategory)
router.get("/",categoryController.getAllCategories)
module.exports = router