var gid ,gname;
const getEmployeeData = (id,name)=>{
    console.log("get employee data called...")
    gid = id
    gname = name
}
const printEmployeeData=()=>{
    console.log(`print employee data id=  ${gid} name = ${gname}`)
}

//individual export
//module.exports = getEmployeeData

module.exports = {
    getEmployeeData,printEmployeeData
}
