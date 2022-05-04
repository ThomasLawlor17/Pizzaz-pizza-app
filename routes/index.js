var router = require("express").Router();
var passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.render('index', {title: 'PIZZAZ', user: req.user});
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/restaurants");
});

module.exports = router;
