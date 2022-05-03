var mongoose = require('mongoose')
const Schema = mongoose.Schema

var toppingsSchema = new Schema({
    name: String,
    category: {
        type: String,
        enum: ['MEATS', 'VEGGIES', 'CHEESE', 'OTHER']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Topping', toppingsSchema)