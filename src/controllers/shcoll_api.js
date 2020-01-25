const mongoose = require('mongoose');
const connectDB = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../middleware/errorResponse');
const Shcool = require('../models/Shcool');

//@desc    Create new Shcool
//@rout    POST /shcoolChatbots/shcool/create
exports.createNewShcool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const newShcool = await Shcool.create(req.body);

  if (!newShcool) {
    return next(new ErrorResponse(`Not faund ${req.body}`, 500));
  }

  res.status(201).json({
    sucsess: true,
    body: newShcool
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    Get all information about shcool
//@rout    GET /shcoolChatbots/shcool/:id
exports.getInformationShcool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const shcool = await Shcool.findById(req.params.id);

  if (!shcool) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }

  res.status(201).json({
    sucsess: true,
    body: shcool
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc    Update Shcool
//@rout    PUT /shcoolChatbots/shcool/update/:id
exports.updateShcool = asyncHandler(async (req, res, next) => {
  await connectDB();
  const shcool = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!shcool) {
    return next(new ErrorResponse(`Not found id in ${req.params.id}`, 500));
  }

  res.status(200).json({
    sucsess: true,
    body: shcool
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});
