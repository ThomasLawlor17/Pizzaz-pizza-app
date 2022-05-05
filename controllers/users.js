const request = require('request')

const Restaurant = require('../models/restaurant');
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    addRestaurant,
    removeRestaurant,
    addPizza,
    removePizza,
    isLoggedIn,
}

function addRestaurant(req, res) {
    if (req.user) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
            console.log(restaurant)
            console.log('BREAK ---------------------------')
            User.findById(req.user, function(err, user) {
                user.favouriteRestaurants.push(restaurant.id)
                user.save(function(err) {
                    console.log(user)
                    res.redirect('/restaurants')
                })
            }) 
        })
    }
}

function removeRestaurant(req, res) {
    User.findByIdAndUpdate(req.user.id, { $pull: { favouriteRestaurants: { $in: [req.params.id] } } }, function(err, user) {
        console.log(user)
        res.redirect('/restaurants')
    })
}

function addPizza(req, res) {
    if (req.user) {
        Pizza.findById(req.params.id, function(err, pizza) {
            console.log(pizza)
            console.log('BREAK ---------------------------')
            User.findById(req.user, function(err, user) {
                user.favouritePizzas.push(pizza.id)
                user.save(function(err) {
                    console.log(user)
                    res.redirect('/pizzas')
                })
            }) 
        })
    }
}

function removePizza(req, res) {
    User.findByIdAndUpdate(req.user.id, { $pull: { favouritePizzas: { $in: [req.params.id] } } }, function(err, user) {
        console.log(user)
        res.redirect('/pizzas')
    })
}


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }

