const Restaurant = require("../models/restaurant");
const Pizza = require("../models/pizza");
const User = require("../models/user");

module.exports = {
	index,
};

function index(req, res) {
	if (req.user) {
        console.log('FULL USER: ', req.user)
        console.log('USER ID: ', req.user.id)
            user = req.user
            User.findById(req.user.id)
            .populate("favouriteRestaurants")
			.exec(function (err, userRes) {
				Restaurant.find({ _id: { $in: userRes.favouriteRestaurants } }, function (err, faveRes) {
                    User.findById(req.user.id).populate("favouritePizzas").exec(function(err, userPiz) {
                        Pizza.find({ _id: { $in: userPiz.favouritePizzas } }, function (err, favePiz) {
                            res.render("favourites/index", {
                                title: "Favourites",
                                user,
                                faveRes,
                                favePiz,
                    })
						});
					});
				});
			});
 	} else {
 		res.redirect("/auth/google");
 	}
 }
