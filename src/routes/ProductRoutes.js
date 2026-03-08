const router = require("express").Router()
const productController = require("../controllers/ProductController")
router.get("/products",productController.getAllProducts)
router.get("/product/:id",productController.getProductById)
router.delete("/product/:id",productController.deleteProduct)
module.exports = router