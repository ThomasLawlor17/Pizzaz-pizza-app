var router = require('express').Router()
var randomizeCtrl = require('../controllers/randomize')

router.get('/', randomizeCtrl.index)

module.exports = router