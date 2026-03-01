//functions

//req -->request
//res -->response..

const useObj = {
  id: 101,
  name: "amit",
  age: 23,
};

const getUser = (req, res) => {
  console.log("get user api called...");
  //res.send("user api called...")
  //res.send(useObj)
  res.json({
    message: "user api called..",
    data: useObj,
  });
};

const users = [
  { id: 1, name: "jay", age: 24, salary: 34000 },
  { id: 2, name: "jaya", age: 26, salary: 44000 },
];

const getAllUsers = (req, res) => {

    res.json({
        message:"all users fetched !!",
        data:users
    })
};
const getUserById = (req,res)=>{
    //id -->req
    //url --> req.params --{}
    console.log("req.params",req.params)
    console.log("req.params.id",req.params.id)
    //id ->user array find -->
    //HINT: use find function of array
    //check if user avaialble then send user obj
    //not avaialble then send message user is not found
    //send res from if and else boh

    const foundUser = users.find((user)=>user.id == req.params.id)
    console.log(foundUser)
    if(foundUser){
        res.json({
            message:"user found",
            data:foundUser
        })
    }
    else{
        res.json({
            message:"user not found..",
        })
    }
    

}

module.exports = {
  getUser,getAllUsers,getUserById
};
