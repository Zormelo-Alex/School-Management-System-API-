const AsyncHandler = require("express-async-handler");
const ClassLevel = require("../../model/Academics/ClassLevel");
const Admin = require("../../model/Staff/Admin");

//@Desc Create Class level
//@Route POST api/v1/class-levels
//@Access Private
exports.createClassLevelCtrl =( AsyncHandler (async (req,res)=>{
    res.status(201).json({
        status : "Success",
        message : "Class Level Created Successfull",
        data : ""
    })
}))

//@Desc Get Single Class level
//@Route GET api/v1/class-levels/:id
//@Access Private
exports.getClassLevelCtrl =( AsyncHandler (async (req,res)=>{
    res.status(200).json({
        status : "Success",
        message : "Get single Class Level Successfull",
        data : ""
    })
}))

//@Desc Get All Class Class level
//@Route GET api/v1/class-levels/
//@Access Private
exports.getClassLevelsCtrl =( AsyncHandler (async (req,res)=>{
    res.status(200).json({
        status : "Success",
        message : "Get All Class Level Successfull",
        data : ""
    })
}))

//@Desc Update Single Class level
//@Route PUT api/v1/class-levels/:id
//@Access Private
exports.updateClassLevelCtrl =( AsyncHandler (async (req,res)=>{
    res.status(200).json({
        status : "Success",
        message : "Updated Class Level Successfull",
        data : ""
    })
}))

//@Desc Delete Single Class level
//@Route DELETE api/v1/class-levels/:id
//@Access Private
exports.deleteClassLevelCtrl =( AsyncHandler (async (req,res)=>{
    res.status(200).json({
        status : "Success",
        message : "Delete Class Level Successfull"
      
    })
}))