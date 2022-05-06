var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/'});
var pizzasCtrl = require('../controllers/pizzas');
const { isLoggedIn } = require('../controllers/users');



router.get('/pizzas', pizzasCtrl.index)
router.get('/pizzas/new',isLoggedIn, pizzasCtrl.new)
router.get('/pizzas/:id', pizzasCtrl.show)
router.post('/pizzas',isLoggedIn, upload.single('image'), pizzasCtrl.create)

module.exports = router;