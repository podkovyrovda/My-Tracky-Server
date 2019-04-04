const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema ({
  _id: {
    type: String,
    default: shortid.generate
  },
  _tracks: [{
    type: String,
    ref: 'track'
  }],
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
  }
},
{
  versionKey: false
});

module.exports = User = mongoose.model('user', UserSchema);