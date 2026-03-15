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

//POST:
const createProduct = async(req,res)=>{

  //productmodel 
  //url -->req.params --->url
  //create ---> params.. post method -->req.body
  console.log("req.body....",req.body)
  try{

    const savedProduct = await productSchema.create(req.body)
    res.status(201).json({
      message:"product created.",
      data:savedProduct
    })

  }catch(err){
    res.status(500).json({
      message:"error while create product",
      err:err
    })
  }

}
//UPDATE PRODUCT
//update products set prnam?.?// where id =?
//{} -->new objecy -->req.body
//id --where --> req.params
const updateProduct = async(req,res)=>{

  const id = req.params.id;
  const newData = req.body;

  try{

    //db.products.updateOne(id,{$set:{productName:req.body.name,..}})
    //const updatedProductObj = await productSchema.findByIdAndUpdate(id,newData)
    const updatedProductObj = await productSchema.findByIdAndUpdate(id,newData,{new:true})
    res.status(200).json({
      message:"product updated..",
      data:updatedProductObj
    })

  }catch(err){

    res.status(500).json({
      message:"error while update product",
      err:err
    })
  }



}

//check if color is already exists dont add it. return message that color is exist..
const addColor = async(req,res)=>{

  const color = req.body.color
  const id = req.params.id;

  try{
    //const updatedProductObj = await productSchema.findByIdAndUpdate(id,{$push:{columnName:req.body.color}})
    const updatedProductObj = await productSchema.findByIdAndUpdate(id,{$push:{colors:color}},{new:true})
    res.status(200).json({
      message:"color added",
      data:updatedProductObj
    })



  }catch(err){
    res.status(500).json({
      message:"error while adding color",
      err:err
    })
  }

}
//remove color
//replace $push with $pull

module.exports = {
  getAllProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  addColor
};
