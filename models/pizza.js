const { type } = require('express/lib/response')
var mongoose = require('mongoose')
const Schema = mongoose.Schema

var pizzaSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    crust: {
        type: String,
        enum: ['THIN', 'THICK', 'CLASSIC', 'DEEP DISH', 'PAN', 'GLUTEN FREE', 'WHOLE WHEAT', 'OTHER'],
    },
    sauce: {
        type: String,
        enum: ['CLASSIC TOMATO', 'WHITE', 'BBQ', 'OTHER'],
    },
    toppings: String,
    //toppings: [{type: Schema.Types.ObjectId, ref: 'Toppings'}],
    image: {
        type: String
    },
}, {
timestamps: true,
})

module.exports = mongoose.model('Pizza', pizzaSchema)