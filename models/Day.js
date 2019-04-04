const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema ({
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  }
},
{
  versionKey: false
})

module.exports = Day = mongoose.model('day', DaySchema)