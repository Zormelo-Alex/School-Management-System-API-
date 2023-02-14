const Exam = require("../../model/Academics/Exam");
const Teacher = require("../../model/Staff/Teacher");
const Subject = require("../../model/Academics/Subject");
const Program = require("../../model/Academics/Program");
const AcademicTerm = require("../../model/Academics/AcademicTerm");
const AcademicYear = require("../../model/Academics/AcademicYear");
const ClassLevel = require("../../model/Academics/ClassLevel");
const AsyncHandler = require("express-async-handler");

//@Descs Creating of Exam
//@Route POST /api/v1/exams/teacher
//@Access Private to Teacher
exports.createExamCtrl = AsyncHandler(async (req, res) => {
  const {
    name,
    description,
    subject,
    program,
    academicTerm,
    Examtime,
    classLevel,
    academicYear,
  } = req.body;

  const examExit = await Exam.findOne({ name });
  if (examExit) {
    throw new Error("Exam Already exit");
  }
  const subjectFound = await Subject.findOne({ subject });
  if (!subjectFound) {
    throw new Error("Subject not found");
  }
  const programFound = await Program.findOne({ program });
  if (!programFound) {
    throw new Error("Program not found");
  }
  const academicTermFound = await AcademicTerm.findOne({ academicTerm });
  if (!academicTermFound) {
    throw new Error("Academic Term not found");
  }
  const classLevelFound = await ClassLevel.findOne({ classLevel });
  if (!classLevelFound) {
    throw new Error("Class Level not found");
  }
  const academicYearFound = await AcademicYear.findOne({ academicYear });
  if (!academicYearFound) {
    throw new Error("Academic Year not found");
  }
  const createdExam = await Exam.create({
    name,
    description,
    subject: subjectFound?._id,
    program: programFound?._id,
    academicTerm: academicTermFound?._id,
    Examtime,
    classLevel: classLevelFound?._id,
    academicYear: academicYearFound?._id,
    createdBy: req.useAuth._id,
  });
  res.status(201).json({
    status: "Success",
    message: "Exam Created Successfull",
    data: createdExam
  });
});
