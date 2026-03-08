const productSchema = require("../models/ProductModel");

//api -->function
const getAllProducts = async (req, res) => {
  //database record --> connected---> table --> products == productSchema
  const allproducts = await productSchema.find();
  res.json({
    message: "products fetched..",
    data: allproducts,
  });
};

// const getProductById = async (req, res) => {
//   //req.params.id
//   //db.products.findOne({_id:ObjectId("")})
//   //productSchema.findOne({_id:ObjectId(req.params.id)})
//   //const foundProduct = await productSchema.findOne({_id:ObjecId(req.params.id)})
//   const foundProduct = await productSchema.findById(req.params.id);

//   if (foundProduct) {
//     console.log("found produtc", foundProduct);
//     res.json({
//       message: "product found",
//       data: foundProduct,
//     });
//   }
//   else{
//     res.json({
//       message: "product not found",

//     });
//   }
// };

//with try catch
const getProductById = async (req, res) => {
  //req.params.id
  //db.products.findOne({_id:ObjectId("")})
  //productSchema.findOne({_id:ObjectId(req.params.id)})
  //const foundProduct = await productSchema.findOne({_id:ObjecId(req.params.id)})

  console.log("id", req.params.id);
  console.log("here 1");
  try {
    const foundProduct = await productSchema.findById(req.params.id);
    console.log("here 2");

    if (foundProduct) {
      console.log("found produtc", foundProduct);
      res.json({
        message: "product found",
        data: foundProduct,
      });
    } else {
      res.json({
        message: "product not found",
      });
    }
  } catch (err) {
    res.json({
      message: "error while fetching product",
      err: err.message,
    });
  }
};


const deleteProduct = async(req,res)=>{
  //db.products.removeOne({_id:ObjectId(req.params.id)})
  //productSchema.deleteOne({_id:ObjectId(req.params.id)})

  try{

    const id = req.params.id;
    const deletedProductObj = await productSchema.findByIdAndDelete(id);
    if(deletedProductObj){
    res.json({
      message:"product deleted",
      data:deletedProductObj
    })
  }else{
    res.json({
      message:"product not found to delete",
      
    })
  }


  }catch(err){
    res.json({
      message:"error while deleating user...",
      err:err
    })
  }

}

module.exports = {
  getAllProducts,
  getProductById,
  deleteProduct
};
