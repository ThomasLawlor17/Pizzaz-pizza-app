var router = require('express').Router();
const request = require('request')
var restaurantsCtrl = require('../controllers/restaurants');
const multer = require("multer");
const upload = multer({ dest: 'uploads/'});
const { isLoggedIn } = require('../controllers/users');

router.get('/restaurants', restaurantsCtrl.index);
router.get('/restaurants/new', isLoggedIn, restaurantsCtrl.new)
router.post('/restaurants', isLoggedIn, upload.single('image'), restaurantsCtrl.create)
router.get('/restaurants/:id', restaurantsCtrl.show)

module.exports = router;
