//User Model
const User = require('../models/User');

module.exports = {
  getAll: (req, res) => {
    User.find()
      .then(users => res.json(users))
  },
  
  getOne: (req, res) => {
    User.findById(req.params.user_id)
      .populate('tracks')
      .then(user => res.json(user))
  },

  addNew: (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then(user => res.json(user));
  },

  deleteOne: (req, res) => {
    User.findById(req.params.user_id)
    .then(user => user.remove()
      .then(() => res.sendStatus(200)))
    .catch(() => res.sendStatus(404));
  }
}
