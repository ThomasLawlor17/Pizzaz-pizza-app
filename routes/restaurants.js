var router = require('express').Router();
var restaurantsCtrl = require('../controllers/restaurants');


router.get('/', restaurantsCtrl.index);
router.get('/new', restaurantsCtrl.new)
router.post('/', restaurantsCtrl.create)
router.get('/:id', restaurantsCtrl.show)

module.exports = router;
