var router = require('express').Router()
var randomizeCtrl = require('../controllers/randomize')
const { isLoggedIn } = require('../controllers/users');

router.get('/', randomizeCtrl.index)

module.exports = router