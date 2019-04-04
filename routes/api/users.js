const express = require('express');

const router = express.Router();

// Controllers
const User = require('../../controllers/UserController');
const Track = require('../../controllers/TrackController');
const Day = require('../../controllers/DayController');

router.route('/')
  .get(User.getAll)
  .post(User.addNew);

router.route('/:user_id')
  .get(User.getOne)
  .delete(User.deleteOne);

router.route('/:user_id/tracks')
  .get(Track.getAll)
  .post(Track.addNew);

router.route('/:user_id/tracks/:track_d')
  .delete(Track.deleteOne)
  .put(Track.updateOne);

router.route('/:user_id/tracks/:track_id/days')
  .get(Day.getAll)
  .post(Day.addNew)
  .delete(Day.deleteOne);

module.exports = router;