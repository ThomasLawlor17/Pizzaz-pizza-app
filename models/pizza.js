var mongoose = require('mongoose')
const Schema = mongoose.Schema

var toppingsSchema = new Schema({
    name: String,
    category: {
        type: String,
        enum: ['Meats', 'Veggies', 'Cheese', 'Other']
    },
}, {
    timestamps: true
})

var pizzaSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    toppings: [toppingsSchema],
    favourite: Boolean,
}, {
timestamps: true,
})

module.exports = mongoose.model('Pizza', pizzaSchema)