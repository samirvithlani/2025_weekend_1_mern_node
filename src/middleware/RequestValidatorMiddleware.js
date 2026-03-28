//scham == userValdationscaha
//scahma == productavalidac
//scahma ----
//scahma === userValiudationScahma
const requestValidator = (schama)=> (req,res,next)=>{
    
    try{
        
        schama.parse(req.body) //excpetion -->catch
        next()

    }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
    }

}
module.exports = requestValidator