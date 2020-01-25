const mongoose = require('mongoose');

const TeacherShema = mongoose.Schema({
  theme: String,
  fullName: {
    name: {
      type: String,
      required: [true, `Please add a Name`]
    },
    surname: {
      type: String,
      required: [true, `Please add a Surmame`]
    }
  },
  age: Number,
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
});

module.exports = mongoose.model('Teacher', TeacherShema);
