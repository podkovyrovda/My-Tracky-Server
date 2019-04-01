//User Model
const User = require('../models/User');

exports.getAll = (req, res) => {
  User.find()
    .then(users => res.json(users))
};

exports.getOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
}

exports.addNew = (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(user => res.json(user));
};

exports.deleteOne = (req, res) => {
  User.findById(req.params.id)
  .then(user => user.remove()
    .then(() => res.sendStatus(200)))
  .catch(() => res.sendStatus(404));
};

