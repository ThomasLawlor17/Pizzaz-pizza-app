const Restaurant = require('../models/restaurant')

module.exports = {
    create,
    delete: deleteReview,

}

function create(req, res) {
    if (req.user) {
        Restaurant.findById(req.params.id, function(err, restaurant) {
            user = req.user
            restaurant.reviews.push(req.body)
            restaurant.save(function(err) {
                console.log(restaurant)
                res.redirect(`/restaurants/${req.params.id}`)
            })
        })
    } else {
        res.redirect('/auth/google')
    }
}

function deleteReview(req, res) {
    Restaurant.find({'reviews._id': req.params.id}, function(err, restaurants) {
        Restaurant.findById(restaurants[0]._id, function(err, restaurant) {
        restaurant.reviews.id(req.params.id).remove()
        restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`)
        })
    })
    })
}
