const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');

router
.get('/', moviesAPIController.list)
.get('/:id', moviesAPIController.detail)
.get('/recomended/:rating', moviesAPIController.recomended)
.post('/create', moviesAPIController.create)
.put('/update/:id', moviesAPIController.update)
.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;