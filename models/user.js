var mongoose = require('mongoose');
const Schema = mongoose.Schema


var userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  admin: {
    type: Boolean,
    default: false,
  },
  favouriteRestaurants: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
  favouritePizzas: [{type: Schema.Types.ObjectId, ref: 'Pizza'}],
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);