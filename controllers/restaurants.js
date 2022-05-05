const request = require("request");
const fs = require("fs");
const token = process.env.GOOGLE_TOKEN;
const rootURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";

const Restaurant = require("../models/restaurant");
const Pizza = require("../models/pizza");
const User = require("../models/user");
const { post } = require("../routes");

module.exports = {
	index,
	new: newRestaurant,
	create,
	show,
	//places
};

// function places(req, res) {
//   const id = req.params.id
//   const placeOps = detailsCall({
//     url: `https://maps.googleapis.com/maps/api/js?key=${token}&callback=initMap`
//   })
//   Promise.all([placeOps]).then(([placeDetails] => {

//   }))
// }

function index(req, res, next) {
	if (req.user) {
		Restaurant.find({}, function (err, restaurants) {
			User.findById(req.user.id, function (err, user) {
				console.log(user.favouriteRestaurants);
				res.render("restaurants/index", {
					title: "Restaurants",
					user,
					restaurants,
				});
			});
		});
	} else {
		Restaurant.find({}, function (err, restaurants) {
			res.render("restaurants/index", {
				title: "Restaurants",
				user: req.user,
				restaurants,
			});
		});
	}
}

function newRestaurant(req, res) {
	if (req.user) {
		res.render("restaurants/new", { title: "New Restaurant", user: req.user });
	} else {
		res.redirect("/auth/google");
	}
}

function create(req, res) {
	if (req.user) {
		if (req.file) {
      console.log(req.file);
		let image = base64_encode(req.file.path);

		const options = {
			method: "POST",
			url: "https://api.imgur.com/3/image",
			headers: {
				Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
			},
			formData: {
				image: image,
				type: "base64",
			},
		};
		request(options, function (err, response) {
			if (err) return console.log(err);
			let body = JSON.parse(response.body);
			console.log(body);
			req.body.image = body.data.link;
      const restaurant = new Restaurant(req.body)
      restaurant.save(function(err, restaurant) {
        console.log(restaurant)
        res.redirect(`/restaurant/${restaurant.id}`)
      })
		});
	} else {
    req.body.image = 'https://i.imgur.com/Y3Qm1Tg.png'
    const restaurant = new Restaurant(req.body)
    restaurant.save(function(err, restaurant) {
      res.redirect(`/restaurants/${restaurant.id}`)
    })
  }
}
}

//       console.log(req.body)
//     const restaurant = new Restaurant(req.body)
//     restaurant.save(function(err) {
//       if (err) {
//         console.log(err)
//         return res.render('restaurants/new', {title: 'New Restaurant', user: req.user})
//       }
//       console.log(restaurant)
//       res.redirect(`/restaurants/${restaurant.id}`)
//     })
//   }
// }

function show(req, res) {
	Restaurant.findById(req.params.id, function (err, restaurant) {
		res.render("restaurants/show", {
			title: restaurant.name,
			restaurant,
			user: req.user,
		});
	});
}

function base64_encode(image) {
	var bitmap = fs.readFileSync(image);
	return bitmap.toString("base64");
}
