var router = require('express').Router()
var toppingsCtrl = require('../controllers/toppings')

router.post('/toppings', toppingsCtrl.create)

module.exports = router