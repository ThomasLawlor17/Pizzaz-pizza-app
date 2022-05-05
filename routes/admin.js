var express = require('express')
var router = express.Router()
var adminCtrl = require('../controllers/admin')

router.get('/admin', isLoggedIn, adminCtrl.index)
router.put('/restaurants/:id', isLoggedIn, adminCtrl.updateRes)
router.put('/pizzas/:id', isLoggedIn, adminCtrl.updatePiz)
router.put('/toppings/:id', isLoggedIn, adminCtrl.updateTop)
router.delete('/restaurants/:id', isLoggedIn, adminCtrl.deleteRes)
router.delete('/pizzas/:id', isLoggedIn, adminCtrl.deletePiz)
router.delete('/toppings/:id', isLoggedIn, adminCtrl.deleteTop)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }

module.exports = router