const jwt = require("jsonwebtoken");
const secret = "secret";
const userSchema = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("token", token);
  //Bearer kopkpowkopkpok
  if (token) {
    //token Should be Bearer token..
    if (token.startsWith("Bearer ")) {
      //Bearer alkasl;a;lksklsanlkasasnasksmaslkmasl;kasmasl;
      const tokenValue = token.split(" ")[1];
      console.log("token value", tokenValue);
      try {
        const decoded = await jwt.verify(tokenValue, secret);
        console.log(decoded);
        const foundUser = await userSchema.findById(decoded._id);
        if (foundUser) {
          next();
        } else {
          res.status(401).json({
            message: "invalid user",
          });
        }
      } catch (err) {
        res.status(401).json({
          message: "invalid token",
          err: err,
        });
      }
    } else {
      res.status(401).json({
        message: "token is bot Bearer token",
      });
    }
  } else {
    res.status(401).json({
      message: "token is missing",
    });
  }
};
module.exports = authMiddleware;
