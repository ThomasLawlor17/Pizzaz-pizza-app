const Pizza = require('../models/pizza')

module.exports = {
    index,
}

function index(req, res) {
    res.render('pizzas/index', {title: 'Pizzas', user: req.user})
}