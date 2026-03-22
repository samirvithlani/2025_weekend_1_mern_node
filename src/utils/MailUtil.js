const mailer = require("nodemailer")

const mailSend = async(to,subject,text)=>{

    const transport = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"pythonforsamir@gmail.com",
            pass:"sdgg ohhb ykec jbrq"  
        }
    })
    const mailOption = {
        to:to,
        subject:subject,
        text:text,
        from:"pythonforsamir@gmail.com"
    }
    const mailresponse =await transport.sendMail(mailOption)
    console.log(mailresponse)

}
//mailSend("samir.vithlani83955@gmail.com","test","welcome")
module.exports = mailSend