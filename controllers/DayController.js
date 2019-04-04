// Model
const User = require('../models/User');
const Day = require('../models/Day');
const Track = require('../models/Track');

exports.getAll = (req, res) => {
  Track.findById(req.params.track_id)
    .populate('_days')
    .then((track) => res.json(track))
};

exports.addNew = (req, res) => {
  const newDay = new Day(req.body);
  Track.findById(req.params.track_id)
    .then(track => {
      newDay.save();
      track._days.push(newDay);
      track.save();
      res.json(track);
    });
};

exports.deleteOne = (req, res) => {

};

exports.updateOne = (req, res) => {

};
