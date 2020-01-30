const mongoose = require('mongoose');
const connectDB = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Group = require('../models/Group');
const School = require('../models/School');

//@desc   Create new group
//@rout   POST /schoolChatbots/group/create/:schoolID
exports.createGroup = asyncHandler(async (req, res, next) => {
  await connectDB();
  const group = await Group.create(req.body);
  if (!group) {
    return next(new ErrorResponse(`Not faund ${req.body}`, 500));
  }
  const school = await School.findById(req.params.id);
  if (!school) {
    return next(new ErrorResponse(`Not faund ${req.params.id}`, 500));
  }
  school.groups.push(group._id);
  await school.save();
  res.status(200).json({
    sucsess: true,
    body: group
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc   delete group
//@rout   DELETE /schoolChatbots/group/delete/:id
exports.deleteGroup = asyncHandler(async (req, res, next) => {
  await connectDB();
  const group = await Group.findByIdAndDelete(req.params.id);

  if (!group) {
    return next(new ErrorResponse(`Not found ${req.params.id}`, 500));
  }
  res.status(200).json({
    status: sucsess,
    body: `Gorup id ${group.id} deleted`
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc   Update group
//@rout   PUT /schoolChatbots/group/update/:id
exports.updateGroup = asyncHandler(async (req, res, next) => {
  await connectDB();
  const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!group) {
    return next(new ErrorResponse(`Not found ${req.params.id}`, 500));
  }
  res.status(200).json({
    status: sucsess,
    body: group
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});

//@desc   get group
//@rout   GET /schoolChatbots/group/:id
exports.getGroup = asyncHandler(async (req, res, next) => {
  await connectDB();
  const group = await Group.findById(req.params.id);
  if (!group) {
    return next(new ErrorResponse(`Not found ${req.params.id}`, 500));
  }
  res.status(200).json({
    sucsess: true,
    body: group
  });
  mongoose.disconnect(() =>
    console.log(`Mongo disconnected`.brightRed.underline)
  );
});
