const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')

module.exports = {
    index,
}

function index(req, res) {
    res.render('favourites/index', {title: 'Favourites', user: req.user})
}