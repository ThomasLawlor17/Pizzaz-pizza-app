const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')
const { find } = require('../models/restaurant')

module.exports = {
    index,
}

function index(req, res) {
    if (req.user) {
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
    Restaurant.aggregate([{ $sample: {size: 1 } }], function(err, restaurant) {
        Pizza.aggregate([{ $sample: {size: 1}}], function(err, pizza) {
            restaurant = restaurant[0]
            pizza = pizza[0]
                console.log('REST: ',restaurant._id,'PZZA: ', pizza)
                res.render('randomize/index', {title: 'RANDOMIZE', user: req.params.user, pizza, restaurant})
            })
        })
}}