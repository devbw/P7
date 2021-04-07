const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likes');
const auth = require('../middlewares/auth');

router.post('/:postId/likes', likesController.postLike);

module.exports = router;
