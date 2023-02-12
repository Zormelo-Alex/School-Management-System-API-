const express = require("express");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");
const {
  createSubjectCtrl,
  getSubjectsCtrl,
  getSubjectCtrl,
  updateSubjectCtrl,
  deleteSubjectCtrl
} = require("../../controller/Academics/SubjectCtrl");

const subjectRouter = express.Router();

subjectRouter.route("/")
            .post(isLogin,isAdmin,createSubjectCtrl)
            .get(isLogin,isAdmin,getSubjectsCtrl);


            SubjectRouter.route("/:id")
            .get(isLogin,isAdmin,getSubjectCtrl)
            .delete(isLogin, isAdmin,deleteSubjectCtrl)
            .put(isLogin, isAdmin,updateSubjectCtrl);


module.exports = subjectRouter