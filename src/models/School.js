const mongoose = require('mongoose');

const SchoolShema = mongoose.Schema({
  school_number: {
    unique: true,
    type: Number,
    required: [true, 'Please add a number shcool']
  },
  director: {
    name: String,
    surname: String,
    date: { type: Date, default: Date.now }
  },
  adress: {
    type: String,
    required: [true, 'Please add adress shcool']
  },
  teachers: Array,
  groups: Array,
  students: Array
});
module.exports = mongoose.model('School', SchoolShema);
