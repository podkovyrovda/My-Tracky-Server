const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  tracks: [{
    type: Schema.Types.ObjectId,
    ref: 'track'
  }]
},
{
  versionKey: false
});

module.exports = User = mongoose.model('user', UserSchema)