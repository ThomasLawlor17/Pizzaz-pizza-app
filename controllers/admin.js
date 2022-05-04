const Restaurant = require('../models/restaurant');
const Pizza = require('../models/pizza')
const User = require('../models/user');
const Topping = require('../models/toppping')

module.exports = {
    index,
}

function index(req, res) {
    if (req.user.admin) {
        Restaurant.find({}, function(err, restaurants) {
            Pizza.find({}, function(err, pizzas) {
                User.find({}, function(err, users) {
                    Topping.find({}, function(err, toppipngs) {
                        console.log(req.user)
                        res.render('admin/index', {title: 'Admin', restaurants, pizzas, users, toppipngs, user: req.user})
                    })
                })
            })
        })
    } else {
        res.redirect('/')
    }
}