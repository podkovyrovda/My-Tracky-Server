// Models
const User = require('../models/User');
const Track = require('../models/Track');

module.exports = { 
  getAll: (req, res) => {
    User.findById(req.params.user_id)
      .populate({
        path: '_tracks',
        populate: { path: '_days' }
      })
      .then(user => res.json(user._tracks));
  },

  getOne: (req, res) => {
    Track.findById(req.params.track_id)
    .populate('_days')
    .then(track => res.json(track));
  },

  addNew: (req, res) => {
    const newTrack = new Track(req.body);
    User.findById(req.params.user_id)
      .then(user => {
        newTrack.save();
        user._tracks.push(newTrack);
        user.save();
        res.json(user);
      });
  },

  update: (req, res) => {
    Track.findOneAndUpdate(req.params.track_id, req.body)
      .then(() => res.sendStatus(200));
  },

  delete: (req, res) => {
    Track.findOneAndRemove(req.params.track_id)
      .then(() => res.sendStatus(200));
  }
}