const request = require('request')

const Restaurant = require('../models/restaurant');
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    addRestaurant,
    removeRestaurant,

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
}