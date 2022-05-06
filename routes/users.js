var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users') 

router.post('/restaurants/:id/users', isLoggedIn, userCtrl.addRestaurant)
router.delete('/restaurants/:id/users', isLoggedIn, userCtrl.removeRestaurant)
router.post('/pizzas/:id/users', isLoggedIn, userCtrl.addPizza)
router.delete('/pizzas/:id/users', isLoggedIn, userCtrl.removePizza)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

module.exports = router;
