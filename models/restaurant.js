var mongoose = require('mongoose')
const { toBase64 } = require('request/lib/helpers')
const Schema = mongoose.Schema
const token = process.env.GOOGLE_TOKEN
const rootURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'

var reviewSchema = new Schema ({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    content: String,
    username: String,
    userId: String,
}, {
    timeestamps: true,
})


var restaurantSchema = new Schema ({
    name: String,
    reviews: [reviewSchema],
    pizzas: [{type: Schema.Types.ObjectId, ref: 'Pizza' }],
    location: String,
    website: String,
    price: {
        type: String,
        enum: ['$', '$$', '$$$']
    },
    image: {
        type: String
    },
    rating: Number,
}, {
    timeestamps: true,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
