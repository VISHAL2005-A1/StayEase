const User = require("../models/user.js");


module.exports.signup=async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const regiteredUser = await User.register(newUser, password);
        console.log(regiteredUser);
        req.login(regiteredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Airbnb");
            res.redirect("/listings");
        })


    } catch (e) {
        req.flash("errors", e.message);
        console.log(e);
        res.redirect("/signup");
    }

};

module.exports.login=async (req, res) => {
    req.flash("success", "Logged in to your Account");
    console.log("HELLLO");
   
    // console.log(res.locals.redirectUrl);
    res.redirect(res.locals.redirectUrl);
};

module.exports.logout=(req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings");
    })

};