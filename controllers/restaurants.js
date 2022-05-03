const request = require('request')
const token = process.env.GOOGLE_TOKEN
const rootURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'


const Restaurant = require('../models/restaurant');

module.exports = {
  index,
  new: newRestaurant,
  create,
  show,
  //places
};

// function places(req, res) {
//   const id = req.params.id
//   const placeOps = detailsCall({
//     url: `https://maps.googleapis.com/maps/api/js?key=${token}&callback=initMap`
//   })
//   Promise.all([placeOps]).then(([placeDetails] => {

//   }))
// }

function index(req, res, next) {
    Restaurant.find({}, function(err, restaurants) {
      res.render('restaurants/index', {title: 'Restaurants', user: req.user, restaurants})
    })
}

function newRestaurant(req, res) {
  if (req.user) {
    res.render('restaurants/new', {title: 'New Restaurant', user: req.user})
  } else {
    res.redirect('/auth/google')
  }
}

function create(req, res) {
  if (req.user) {
    console.log(req.body)
    const restaurant = new Restaurant(req.body)
    restaurant.save(function(err) {
      if (err) {
        const newRestaurant = new Restaurant()
        console.log(err)
        return res.render('restaurants/new', {title: 'New Restaurant', user: req.user})
      }
      console.log(restaurant)
      res.redirect('/')
    })
  }
}

function show(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    res.render('restaurants/show', {title: restaurant.name, restaurant, user: req.user})
  })
}