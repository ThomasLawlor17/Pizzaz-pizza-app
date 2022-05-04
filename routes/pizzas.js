var express = require('express');
var router = express.Router();
var pizzasCtrl = require('../controllers/pizzas')



router.get('/pizzas', pizzasCtrl.index)
router.get('/pizzas/new', pizzasCtrl.new)
router.post('/pizzas', pizzasCtrl.create)

module.exports = router;