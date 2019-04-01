const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dates = new Schema ({
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

//Create Track Schema
module.exports = TrackSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  _startDate: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  },
  _dates: [dates]
},
{
  versionKey: false
});
