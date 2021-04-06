const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');
const auth = require('../middlewares/auth');

router.post('/:postId/comment', auth, commentsController.createComment);

router.put('/:postId/comment/:commentId', commentsController.modifyComment);

router.delete('/:postId/comment/:commentId', commentsController.deleteComment);

router.get('/:postId/comment/:commentId', commentsController.getOneComment);

module.exports = router;
