const mongoose = require('mongoose');

const GroupShema = mongoose.Schema({
  students: Array
});

module.exports = mongoose.model('Group', GroupShema);
