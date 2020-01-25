const mongoose = require('mongoose');

const StudentShema = mongoose.Schema({
  fullName: {
    name: {
      type: String,
      required: [true, 'Please add a Name']
    },
    surname: {
      type: String,
      required: [true, 'Please add a Surname']
    }
  },
  dateOfBirth: Date
  //   group:Number//////////////////////////???????
});

module.exports = mongoose.model('Student', StudentShema);
