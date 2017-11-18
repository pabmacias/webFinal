var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET login page. */
router.get('/login', indexController.login);

router.get('/session', indexController.session);

/* GET register page. */
router.get('/register', indexController.register);

module.exports = router;
