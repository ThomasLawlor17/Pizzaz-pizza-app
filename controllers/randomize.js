const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    index,
}

function index(req, res) {
    if (req.user) {
    Restaurant.findOne({ $sample: {size: 1 } }, function(err, restaurant) {
        Pizza.find({ $sample: {size: 1 }}, function(err, pizza) {
            User.findById(req.user.id, function(err, user) {
                console.log(pizza, restaurant)
                res.render('randomize/index', {title: 'RANDOMIZE', user, pizza, restaurant})
            })
        })
    })
} else {
    Restaurant.find({ $sample: {size: 1 } }, function(err, restaurant) {
        Pizza.find({ $sample: {size: 1 }}, function(err, pizza) {
                res.render('randomize/index', {title: 'RANDOMIZE', user: req.params.user, pizza, restaurant})
        })
    })
}}