const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const flash = require("connect-flash");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const {isLoggedIn,isOwner}=require("../middleware.js");
const Listing = require("../models/listing.js");
const UserController=require("../controllers/user.js");


router
  .route("/signup")
  .get( (req, res) => {
    res.render("users/signup.ejs")
  })
  .post( wrapAsync(UserController.signup));

router
   .route("/login")
   .get(saveRedirectUrl, (req, res) => {
    res.render("users/login.ejs");
    })
   .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),UserController.login);


router.get("/logout",UserController.logout );


module.exports = router;