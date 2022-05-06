const restaurants = require("../../controllers/restaurants")

randomRestaurantButton = document.getElementsByClassName('random-restaurant-button')
randomRestaurantButton = function(restaurant) {
    document.getElementsByClassName('random-restaurant-button')
    let randomNum = Math.floor(Math.random() * restaurants.length)
    restaurants[randomNum] = restaurant
    console.log(restaurant)
    return restaurant
   }
randomRestaurantButton.addEventListener('click', randomRestaurantButton())