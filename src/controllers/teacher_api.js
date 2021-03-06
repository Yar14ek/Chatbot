const mongoose = require('mongoose');
const connectDB = require('../db/db');
const Teacher = require('../models/Teacher');
const School = require('../models/School');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

//@desc    Create new Teacher
//@rout    POST /schoolChatbots/teacher/create/:schoolID
exports.createNewTeacher = asyncHandler(async (req, res, next) => {
  await connectDB();
  const teacher = await Teacher.create(req.body);

  const school = await School.findById(req.params.schoolID);
  school.teachers.push(teacher._id);
  await school.save();

  if (!teacher) {
    return next(new ErrorResponse(`Not found req.body in ${req.body}`, 500));
  }
  if (!school) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: teacher
  });

  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    get teacher information
//@rout    GET  /schoolChatbots/teacher/:id
exports.getTeacher = asyncHandler(async (req, res, next) => {
  await connectDB();
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }
  res.status(200).json({
    sucsess: true,
    body: teacher
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    update Teacher
//@rout    PUT /shcoolChatbots/teacher/update/:id

exports.updateTeacher = asyncHandler(async (req, res, next) => {
  await connectDB();
  const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!teacher) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }
  res.status(200).json({
    sucsess: true,
    body: teacher
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    delete Teacher
// @royt    DELETE /shcoolChatbots/teacher/delete/:id
exports.deleteTeacher = asyncHandler(async (req, res, next) => {
  await connectDB();
  const teacher = await Teacher.findByIdAndDelete(req.params.id);
  if (!teacher) {
    await next(new ErrorResponse(`Not found id of ${req.params.id}`, 500));
  }
  res.status(200).json({
    sucsess: true,
    body: `teacher Name: ${teacher.fullName.name} deleted`
  });

  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});
