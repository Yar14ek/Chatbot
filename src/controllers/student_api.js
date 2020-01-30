const mongoose = require('mongoose');
const connectDB = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Student = require('../models/Student');

//@desc   create new Student
//@rout   POST /shcoolChatbots/student/create/:shcoolID&:groupID
exports.createStudents = asyncHandler(async (req, res, next) => {
  await connectDB();
  console.log(req.params);
  const student = await Student.create(req.body);

  if (!student) {
    return next(new ErrorResponse(`Not faund ${req.body}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: student
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc...Del Student
//@rout   DEL /shcoolChatbots/student/delete/:id
exports.deleteStudent = asyncHandler(async (req, res, next) => {
  await connectDB();
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return next(new ErrorResponse(`Not faund id${req.params.id}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: `Student ${student.fullName.name} ${student.fullName.surname} deleted`
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc   Get information about student
//@rout   GET /shcoolChatbots/student/:id

exports.getStudent = asyncHandler(async (req, res, next) => {
  await connectDB();
  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorResponse(`Not faund id${req.params.id}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: student
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc   Update student
//@rout   PUT /shcoolChatbots/student/:id
exports.updateStudent = asyncHandler(async (req, res, next) => {
  await connectDB();
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!student) {
    return next(new ErrorResponse(`Not faund id${req.params.id}`, 500));
  }
  res.status(200).json({
    sucsess: true,
    body: student
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});
