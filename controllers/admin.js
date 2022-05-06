const Restaurant = require('../models/restaurant');
const Pizza = require('../models/pizza')
const User = require('../models/user');
const Topping = require('../models/toppping')

module.exports = {
    index,
    updateRes,
    updatePiz,
    updateTop,
    deleteRes,
    deletePiz,
    deleteTop,
}

function index(req, res) {
    if (req.user.admin) {
        Restaurant.find({}, function(err, restaurants) {
            Pizza.find({}, function(err, pizzas) {
                User.find({}, function(err, users) {
                    Topping.find({}, function(err, toppings) {
                        console.log(req.user)
                        res.render('admin/index', {title: 'Admin', restaurants, pizzas, users, toppings, user: req.user})
                    })
                })
            })
        })
    } else {
        res.redirect('/')
    }
}

function updateRes(req, res) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, restaurant) {
        console.log(restaurant)
        res.redirect('/admin')
    })
}

function updatePiz(req, res) {
    Pizza.findByIdAndUpdate(req.params.id, req.body, function(err, pizza) {
        console.log(pizza)
        res.redirect('/admin')
    })
}

function updateTop(req, res) {
    Topping.findByIdAndUpdate(req.params.id, req.body, function(err, topping) {
        console.log(topping)
        res.redirect('/admin')
    })
}

function deleteRes(req, res) {
    console.log(req.params.id)
    Restaurant.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/admin')
    })
}

function deletePiz(req, res) {
    Pizza.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/admin')
    })
}

function deleteTop(req, res) {
    Topping.findByIdAndDelete(req.params.id, function(err, topping) {
        console.log(topping)
        res.redirect('/admin')
    })
}