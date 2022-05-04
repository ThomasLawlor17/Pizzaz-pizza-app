var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport')
var methodOverride = require('method-override')

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// run passport config
require('./config/passport')

// require our routes
var indexRouter = require('./routes/index');
var restaurantsRouter = require('./routes/restaurants');
var pizzasRouter = require('./routes/pizzas')
var randomizeRouter = require('./routes/randomize')
var favouritesRouter = require('./routes/favourites')
var reviewsRouter = require('./routes/reviews')
var toppingsRouter = require('./routes/toppings')
var usersRouter = require('./routes/users')
var adminRouter = require('./routes/admin')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware-pipeline
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'))
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/', pizzasRouter)
app.use('/randomize', randomizeRouter)
app.use('/favourites', favouritesRouter)
app.use('/', reviewsRouter)
app.use('/', toppingsRouter)
app.use('/', usersRouter)
app.use('/', adminRouter)

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;

