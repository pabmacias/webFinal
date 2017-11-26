var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
//var maalokaController = require('../controllers/maalokaControllers');


//router.redirect('/', require('./../../public/index.html'))

router.get('/', function(req, res) {
  res.render('index.html');
});

//router.use('/maaloka', require('./maaloka.js'));

router.post('/signin', indexController.login);

//router.redirect('/login', require('./../../public/login.html'))
router.get('/login', function(req,res) {
  res.render('login.html');
  //indexController.login;
});

router.get('/session', indexController.session);

router.get('/register', indexController.register);

module.exports = router;
