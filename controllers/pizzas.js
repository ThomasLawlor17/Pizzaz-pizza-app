const Pizza = require('../models/pizza')
const Restaurant = require('../models/restaurant')
const Topping = require('../models/toppping')

module.exports = {
    index,
    new: newPizza,

}

function index(req, res) {
    Pizza.find({}, function(err, pizzas) {
        res.render('pizzas/index', {title: 'Pizzas', user: req.user, pizzas})
    })
}

function newPizza(req, res) {
    Topping.find({}, function(err, toppings) {
        res.render('pizzas/new', {title: 'Add a Pizza', user: req.user, toppings, Pizza})
    })
}