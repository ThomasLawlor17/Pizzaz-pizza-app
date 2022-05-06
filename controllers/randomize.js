const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')
const { find } = require('../models/restaurant')

module.exports = {
    index,
}


function index(req, res) {
    if (req.user) {
    // If logged in allow for filter for favourites (NOT DONE)
    // Aggregate random sample of 1 (enter array to select lone oobject)
    Restaurant.aggregate([{ $sample: {size: 1 } }], function(err, restaurant) {
        Pizza.aggregate([{ $sample: {size: 1 }}], function(err, pizza) {
            User.findById(req.user.id, function(err, user) {
                restaurant = restaurant[0]
                pizza = pizza[0]
                console.log(pizza, restaurant)
                res.render('randomize/index', {title: 'RANDOMIZE', user, pizza, restaurant})
            })
        })
    })
} else {
    // Not logged in can't select from favourites just random from all
    Restaurant.aggregate([{ $sample: {size: 1 } }], function(err, restaurant) {
        Pizza.aggregate([{ $sample: {size: 1}}], function(err, pizza) {
            restaurant = restaurant[0]
            pizza = pizza[0]
                console.log('REST: ',restaurant._id,'PZZA: ', pizza)
                res.render('randomize/index', {title: 'RANDOMIZE', user: req.params.user, pizza, restaurant})
            })
        })
}}