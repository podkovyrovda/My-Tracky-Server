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
  .put(User.update)
  .delete(User.delete);

router.route('/:user_id/tracks')
  .get(Track.getAll)
  .post(Track.addNew);

router.route('/:user_id/tracks/:track_id')
  .get(Track.getOne)
  .delete(Track.delete)
  .put(Track.update);

router.route('/:user_id/tracks/:track_id/days')
  .get(Day.getAll)
  .post(Day.addNew);

router.route('/:user_id/tracks/:track_id/days/:day_id')
  .get(Day.getOne)
  .delete(Day.delete);

module.exports = router;