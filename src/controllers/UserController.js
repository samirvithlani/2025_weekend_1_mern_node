const userSchema = require("../models/UserModel");
const bcrypt = require("bcrypt");
const mailSend = require("../utils/MailUtil");
const jwt = require("jsonwebtoken")
const secret = "secret"

const createUser = async (req, res) => {
  try {
    //req.body.
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    //const savedUser = await userSchema.create(req.body)
    const savedUser = await userSchema.create({
      ...req.body,
      password: hashedPassword,
    });
    //mail...
    var mailtest = `<html>
                            <h1>HELLO</h1>
                        </html>`;
    await mailSend(savedUser.email, "welcome", mailtest);
    res.status(201).json({
      message: "user saved Successfully",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while creating user..",
    });
  }
};

const loginUser = async (req, res) => {
  //email,password
  const { email, password } = req.body;
  const foundUserFromEmail = await userSchema.findOne({ email: email }); //{...password:anycrpted..}
  console.log(foundUserFromEmail);
  if (foundUserFromEmail) {

    if (bcrypt.compareSync(password, foundUserFromEmail.password)) {
        //token..
        //token generate from id only
        const token = jwt.sign(foundUserFromEmail.toObject(),secret,{expiresIn:60})
      res.status(200).json({
        message:"login success",
        //data:foundUserFromEmail
        token:token
      })
    }
    else{
        res.status(401).json({
            message:"invalid credentials",
        })
    }
    
  } else {
    res.status(404).json({
      message: "user not found register first.",
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};
