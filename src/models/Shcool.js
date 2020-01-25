const mongoose = require('mongoose');

const ShcoolShema = mongoose.Schema({
  shcool_number: {
    unique: true,
    type: Number,
    required: [true, 'Please add a number shcool']
  },
  director: {
    name: String,
    surname: String,
    date: { type: Date, default: Date.now } //???
  },
  adress: {
    type: String,
    required: [true, 'Please add adress shcool']
  },
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
  groups: [{ type: mongoose.Schema.Types.ObjectId }]
});
module.exports = mongoose.model('Shcool', ShcoolShema);
