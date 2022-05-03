require('./config/database')
const Restaurant = require('./models/restaurant')
const Pizza = require('./models/pizza')
const Topping = require('./models/toppping')
const data = require('./data')

const p1 = Topping.deleteMany({})
const p2 = Pizza.deleteMany({})

Promise.all([p1, p2])
.then(function(results) {
    console.log(results)
    return Topping.create(data.toppings)
})
.then(function(results) {
    console.log('R2: ', results)
    return Pizza.create(data.pizzas)
})
.then(function(results) {
    console.log("End Results: ", results)
    process.exit()
})