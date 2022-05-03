var router = require('express').Router()
var favouritesCtrl = require('../controllers/favourites')

router.get('/', favouritesCtrl.index)

module.exports = router