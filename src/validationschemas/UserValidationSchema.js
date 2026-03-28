const zod = require("zod")

const userValidationSchema = zod.object({
    name:zod.string().min(3).max(25),
    email:zod.string().email(),
    password:zod.string().min(6).max(25),
    age:zod.number().min(18,"min age should be 18").max(100,"max age should be 100"),
    role:zod.enum(["user","admin"]).default("user"),
    userStatus:zod.enum(["Active","Inactive"]).default("Active")
})

module.exports = userValidationSchema