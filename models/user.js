var mongoose = require('mongoose');
const Schema = mongoose.Schema


var userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  favouriteRestaurants: Boolean,
  favouritePizzas: Boolean,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);