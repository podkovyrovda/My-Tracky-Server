const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  _days: [{
    type: Schema.Types.ObjectId,
    ref: 'day'
  }]},
{
  versionKey: false
});

module.exports = Track = mongoose.model('track', TrackSchema)