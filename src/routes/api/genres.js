const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genresAPIController');

router
    .get('/', genresAPIController.list)
    .get('/:id', genresAPIController.detail)
    .get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;