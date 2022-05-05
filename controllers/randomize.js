const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    index,
}

function index(req, res) {
    if (user) {
    Restaurant.find({}, function(err, restaurants) {
        Pizza.find({}, function(err, pizzas) {
            User.findById(req.user.id, function(err, user) {
                res.render('randomize/index', {title: 'Randomize', user, pizzas, restaurants})
            })
        })
    })
} else {
    Restaurant.find({}, function(err, restaurants) {
        Pizza.find({}, function(err, pizzas) {
            res.render('/randomize/index', restaurants, pizzas)
        })
    })
}}