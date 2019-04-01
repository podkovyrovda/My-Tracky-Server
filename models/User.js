const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TrackSchema = require('./Track');

//Create User Schema
const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  userpic: {
    type: String
  },
  email: {
    type: String
  },
  telegram: {
    type: String
  },
  tracks: [TrackSchema],
},
{
  versionKey: false
});

module.exports = User = mongoose.model('user', UserSchema)