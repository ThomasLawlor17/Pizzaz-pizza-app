var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews')
const { isLoggedIn } = require('../controllers/users')

router.post('/restaurants/:id/reviews', isLoggedIn, reviewsCtrl.create)
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete)

module.exports = router