const Pizza = require("../models/pizza");
const Restaurant = require("../models/restaurant");
const Topping = require("../models/toppping");
const User = require("../models/user");

module.exports = {
	index,
	new: newPizza,
	create,
	show,
};

function index(req, res) {
	Pizza.find({}, function (err, pizzas) {
		res.render("pizzas/index", { title: "Pizzas", user: req.user, pizzas });
	});
}

function newPizza(req, res) {
	if (req.user) {
		Topping.find({}, function (err, toppings) {
			res.render("pizzas/new", {
				title: "Add a Pizza",
				user: req.user,
				toppings,
				Pizza,
			});
		});
	} else {
		res.redirect("auth/google");
	}
}

function create(req, res) {
	// if pizza does not exist yet
	//if (Pizza.findOne({ name: req.body.name } === null)) {
		// if image uploaded
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
				const pizza = new Pizza(req.body);
				restaurant.save(function (err, pizza) {
					console.log(pizza);
					res.redirect(`/pizzas/${pizzas.id}`);
				});
			});
		} else {
			// no image upload set to default
            console.log('BODY: ', req.body)
			req.body.image = "https://i.imgur.com/Kv2FXdw.png";
			const pizza = new Pizza(req.body);
			pizza.save(function (err, pizza) {
				res.redirect(`/pizzas`);
			});
		}
	//} else {
	// if pizza name alreaddy exists
    //res.redirect('/pizzas/new')
 //}
}

function base64_encode(image) {
	var bitmap = fs.readFileSync(image);
	return bitmap.toString("base64");
}

function show(req, res) {
	Pizza.findById(req.params.id, function (err, pizza) {
		res.render("pizzas/show", { title: pizza.name, pizza, user: req.user });
	});
}
