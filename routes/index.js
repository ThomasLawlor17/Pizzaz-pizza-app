var router = require("express").Router();
var passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/restaurants");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/restaurants",
    failureRedirect: "/restaurants",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/restaurants");
});

module.exports = router;
