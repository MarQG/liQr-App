// ===== Comments Routes =======
const commentsController = require('../controllers/commentsController.js');
const express = require('express');
const router = express.Router();

router.get('/new', commentsController.newComment);

router.get('/:comment_id/edit', commentsController.editComment);

module.exports = router;