const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    index,
}

function index(req, res) {
    if (req.user) {
    Restaurant.findOne({ $sample: {size: 1 } }, function(err, restaurant) {
        Pizza.findOne({ $sample: {size: 1 }}, function(err, pizza) {
            User.findById(req.user.id, function(err, user) {
                res.render('randomize/index', {title: 'Randomize', user, pizza, restaurant})
            })
        })
    })
} else {
    Restaurant.find({}, function(err, restaurants) {
        Pizza.find({}, function(err, pizzas) {
            res.render('randomize/index', {restaurants, pizzas, user: false, pizza: false, restaurant: false, title: 'RANDOMIZE'})
        })
    })
}}