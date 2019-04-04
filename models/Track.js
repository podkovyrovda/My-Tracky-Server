const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

//Create Track Schema
module.exports = TrackSchema = new Schema ({
  _id: {
    type: String,
    default: shortid.generate
  },
  _startDate: {
    type: Date,
    default: Date.now
  },
  _days: [{
    type: String,
    ref: 'day'
  }],
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
},
{
  versionKey: false
});

module.exports = Track = mongoose.model('track', TrackSchema);