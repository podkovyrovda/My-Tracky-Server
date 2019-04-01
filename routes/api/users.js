const express = require('express');

const router = express.Router();

// Controllers
const User = require('../../controllers/UserController');
const Track = require('../../controllers/TrackController');

// @route GET /api/users  
// @desc Get all users
router.get('/', User.getAll);

// @route GET /api/users/:id  
// @desc Get user by id
router.get('/:id', User.getOne);

// @route POST /api/users  
// @desc Create New User
router.post('/', User.addNew);

// @route  DELETE /api/users/:id  
// @desc Delete A User
router.delete('/:id', User.deleteOne);


// @route GET /api/users/:id/tracks  
// @desc Get all tracks by user id
router.get('/:id/tracks', Track.getAll);

// @route POST /api/users/:id/tracks  
// @desc Add new track by user id
router.post('/:id/tracks', Track.addNew);

// @route DELETE /api/users/:id/tracks/:trackId  
// @desc Delete track by id
router.delete('/:id/tracks/:trackId', Track.deleteOne);

// @route PUT /api/users/:id/tracks/:trackId  
// @desc Update track by id
router.put('/:id/tracks/:trackId', Track.updateOne);

module.exports = router;