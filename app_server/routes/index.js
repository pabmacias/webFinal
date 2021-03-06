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
});

router.get('/session', indexController.session);

router.post('/signup', indexController.register);

router.get('/register', function(req,res) {
  res.render('register.html');
});

router.post('/addWishlist', indexController.addWishlist);
router.post('/addCart', indexController.addCart);
router.get('/addOrder', indexController.addOrder);

router.get('/getWishlist', indexController.getWishlist);
router.get('/getCart', indexController.getCart);

module.exports = router;
