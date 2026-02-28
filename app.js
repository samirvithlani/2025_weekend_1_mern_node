console.log("app file loaded..")
const user = require("./users")
const employee = require("./employee")

console.log(user)
console.log(user.userName)
console.log(user.userAge)


//individual import from file..
// console.log(employee)
// employee()

//console.log(employee) //{}
employee.getEmployeeData(101,"raj")
employee.printEmployeeData()