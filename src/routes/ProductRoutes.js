const router = require("express").Router()
const productController = require("../controllers/ProductController")
const upload = require("../middleware/UploadMiddleware")
const authMiddleware  = require("../middleware/AuthMiddleware")

router.get("/products",authMiddleware,productController.getAllProducts)
router.get("/product/:id",productController.getProductById)
router.delete("/product/:id",productController.deleteProduct)
router.post("/product",upload.single('file'),productController.createProduct)
router.put("/product/:id",productController.updateProduct)
router.put("/addcolor/:id",productController.addColor)
router.get("/searchprod",productController.searchProduct)
module.exports = router