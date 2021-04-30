const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');


router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.delete('/delete/:id', auth, userController.deleteAccount);

router.get('/:userId', auth, userController.getOneUser)

module.exports = router;
