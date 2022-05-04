const Pizza = require('../models/pizza')
const Restaurant = require('../models/restaurant')
const Topping = require('../models/toppping')
const User = require('../models/user')

module.exports = {
    index,
    new: newPizza,
    create,

}

function index(req, res) {
    Pizza.find({}, function(err, pizzas) {
        res.render('pizzas/index', {title: 'Pizzas', user: req.user, pizzas})
    })
}

function newPizza(req, res) {
    if (req.user) {
        Topping.find({}, function(err, toppings) {
            res.render('pizzas/new', {title: 'Add a Pizza', user: req.user, toppings, Pizza})
        })
    } else {
        res.redirect('auth/google')
    }
}

function create(req, res) {
    if (req.user) {
        console.log(req.body)
    }
}