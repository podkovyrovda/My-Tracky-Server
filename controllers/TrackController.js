// Model
const User = require('../models/User');

exports.getAll = (req, res) => {
  User.findById(req.params.id)
  .then(user => res.json(user.tracks))
};

exports.addNew = (req, res) => {
  User.updateOne(
    {_id: req.params.id},
    { $push: { tracks: { name: req.body.name }}}
  )
  .then(() => { 
    res.sendStatus(200)
  })
};

exports.deleteOne = (req, res) => {
  User.updateOne(
    {_id: req.params.id},
    { $pull: { tracks: { _id: req.params.trackId }}}
  )
  .then(() => { 
    res.sendStatus(200)
  })
};

exports.updateOne = (req, res) => {
  User.updateOne(
    {'tracks._id': req.params.trackId},
    {'$set': { 
      'tracks.$.name': req.body.name,
      'tracks.$.active': req.body.active,
      'tracks.$._id': req.params.trackId
    }})
    .then(() => res.sendStatus(200))
};
