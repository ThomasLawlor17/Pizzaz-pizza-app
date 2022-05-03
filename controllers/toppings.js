const Topping = require('../models/toppping')

module.exports = {
    create,
}

function create(req, res) {
    if (Topping.findOne({name: req.body.name} === null)) {
        req.body.name = req.body.name.toUpperCase()
        Topping.create(req.body, function(err, topping) {
            console.log(topping)
            res.redirect('/pizzas/new')
        })
    } console.log(req.body)
}