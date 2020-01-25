const mongoose = require('mongoose');

const GroupShema = mongoose.Schema({
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Group', GroupShema);
