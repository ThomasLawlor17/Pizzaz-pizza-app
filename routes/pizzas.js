var express = require('express');
var router = express.Router();
var pizzasCtrl = require('../controllers/pizzas')



router.get('/pizzas', pizzasCtrl.index)

module.exports = router;