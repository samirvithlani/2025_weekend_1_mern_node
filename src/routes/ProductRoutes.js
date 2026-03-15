const router = require("express").Router()
const productController = require("../controllers/ProductController")
router.get("/products",productController.getAllProducts)
router.get("/product/:id",productController.getProductById)
router.delete("/product/:id",productController.deleteProduct)
router.post("/product",productController.createProduct)
router.put("/product/:id",productController.updateProduct)
router.put("/addcolor/:id",productController.addColor)
module.exports = router