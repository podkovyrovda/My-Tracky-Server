// Model
const User = require('../models/User');
const Day = require('../models/Day');
const Track = require('../models/Track');

module.exports = {
  getAll: (req, res) => {
    Track.findById(req.params.track_id)
      .populate('_days')
      .then((track) => res.json(track._days));
  },

  getOne: (req, res) => {
    Day.findById(req.params.day_id)
    .then(day => res.json(day));
  },

  addNew: (req, res) => {
    const newDay = new Day(req.body);
    Track.findById(req.params.track_id)
      .then(track => {
        newDay.save();
        track._days.push(newDay);
        track.save();
        res.json(track);
      });
  },

  delete: (req, res) => {
    Day.findOneAndDelete(req.params.day_id)
    .then(() => res.sendStatus(200));
  }
}
