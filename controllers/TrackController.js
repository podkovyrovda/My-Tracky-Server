// Models
const User = require('../models/User');
const Track = require('../models/Track');

module.exports = { 
  getAll: (req, res) => {
    User.findById(req.params.user_id)
    .populate('tracks')
    .then(user => res.json(user.tracks))
  },

  addNew: (req, res) => {
    const newTrack = new Track(req.body);
    User.findById(req.params.user_id)
      .then(user => {
        newTrack.save();
        user.tracks.push(newTrack);
        user.save();
        res.json(user);
      });
  },

  deleteOne: (req, res) => {
    
  },

  updateOne: (req, res) => {

  }
}