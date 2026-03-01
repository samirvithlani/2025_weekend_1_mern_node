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

module.exports = {
  getUser,getAllUsers
};
