var router = require('express').Router()
var favouritesCtrl = require('../controllers/favourites')
const { isLoggedIn } = require('../controllers/users')

router.get('/', isLoggedIn, favouritesCtrl.index)

module.exports = router