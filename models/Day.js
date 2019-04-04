const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const DaySchema = new Schema ({
  _id: {
    type: String,
    default: shortid.generate
  },
  date: {
    type: Date,
    default: Date.now()
  }
},
{
  versionKey: false
})

module.exports = Day = mongoose.model('day', DaySchema);