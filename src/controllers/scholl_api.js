const mongoose = require('mongoose');
const connectDB = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');
const School = require('../models/School');

//@desc    Create new School
//@rout    POST /schoolChatbots/school/create
exports.createNewSchool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const newSchool = await School.create(req.body);

  if (!newSchool) {
    return next(new ErrorResponse(`Not faund ${req.body}`, 500));
  }

  res.status(201).json({
    sucsess: true,
    body: newSchool
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    Get all information about school
//@rout    GET /schoolChatbots/school/:id
exports.getInformationSchool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const school = await School.findById(req.params.id);

  if (!school) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }

  res.status(201).json({
    sucsess: true,
    body: school
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    Update School
//@rout    PUT /schoolChatbots/school/update/:id
exports.updateSchool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const school = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!school) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: school
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});
