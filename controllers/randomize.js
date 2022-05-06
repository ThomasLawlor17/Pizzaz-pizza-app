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
                res.render('randomize/index', {title: 'RANDOMIZE', user, pizza, restaurant})
            })
        })
    })
} else {
    Restaurant.findOne({ $sample: {size: 1 } }, function(err, restaurant) {
        Pizza.findOne({ $sample: {size: 1 }}, function(err, pizza) {
                res.render('randomize/index', {title: 'RANDOMIZE', pizza, restaurant})
        })
    })
}}