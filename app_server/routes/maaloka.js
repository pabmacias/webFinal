var express = require('express');
var router = express.Router();
var maalokaController = require('../controllers/maalokaControllers');

router.get('/', maalokaController.getAll);

router.get('/sale', maalokaController.getSale);
router.get('/saleMax', maalokaController.getSaleMax);

router.get('/recom', maalokaController.getRecom);

router.get('/kitchen', maalokaController.getKitchen);

router.get('/livingRoom', maalokaController.getLivingRoom);

router.get('/bedRoom', maalokaController.getBedRoom);

module.exports = router;
