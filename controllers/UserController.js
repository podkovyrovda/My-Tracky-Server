//User Model
const User = require('../models/User');

module.exports = {
  getAll: (req, res) => {
    User.find()
      .then(users => res.json(users));
  },
  
  getOne: (req, res) => {
    User.findById(req.params.user_id)
      .populate('_tracks')
      .then(user => res.json(user));
  },

  addNew: (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then(user => res.json(user));
  },

  update: (req, res) => {
    User.findOneAndUpdate(req.params.user_id, req.body)
      .then(() => res.sendStatus(200));
  },

  delete: (req, res) => {
    User.findOneAndDelete(req.params.user_id)
      .then(() => res.sendStatus(200));
  }
}
