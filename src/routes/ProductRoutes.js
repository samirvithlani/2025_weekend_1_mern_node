const router = require("express").Router()
const productController = require("../controllers/ProductController")
router.get("/products",productController.getAllProducts)
router.get("/product/:id",productController.getProductById)
module.exports = router