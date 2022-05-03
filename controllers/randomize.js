const Restaurant = require('../models/restaurant')
const Pizza = require('../models/pizza')
const User = require('../models/user')

module.exports = {
    index,
}

function index(req, res) {
    res.render('randomize/index', {title: 'Randomize', user: req.user})
}