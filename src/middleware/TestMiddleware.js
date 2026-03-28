const testMiddleware = (req,res,next)=>{

    console.log("test middleware called....")
    console.log("checking condition using if else...")
    //next()
    res.status(500).json({
        message:"go back.."
    })

}
module.exports = testMiddleware