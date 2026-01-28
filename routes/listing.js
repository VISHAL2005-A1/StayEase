const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const flash = require("connect-flash");
const { isLoggedIn, isOwner, isReviewAuthor } = require("../middleware.js");
const ListingController = require("../controllers/listing.js")
const multer = require("multer");
const { storage } = require("../cloudConfig.js")

const upload = multer({ storage });



//validation of listing
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    // console.log(result);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
//New Route
router.get("/new", isLoggedIn, ListingController.new);

router
    .route("/")
    .get(wrapAsync(ListingController.index))
    .post(
        isLoggedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(ListingController.create),
    )

router
    .route("/:id")
    .get(wrapAsync(ListingController.show))
    .delete(isOwner, isLoggedIn, wrapAsync(ListingController.destroy))

//Index Route
// router.get("/",wrapAsync(ListingController.index));
//Show Route
// router.get("/:id",wrapAsync(ListingController.show));
//Create Route
// router.post("/", isLoggedIn, validateListing, wrapAsync(ListingController.create));
//Edit Route
router.get("/edit/:id", isOwner, isLoggedIn, wrapAsync(ListingController.edit));
// Update Route
router.put("/:id/edit", isOwner, isLoggedIn,upload.single('listing[image]'), validateListing, wrapAsync(ListingController.update));
//Delete Route
// router.delete("/:id",isOwner, isLoggedIn, wrapAsync(ListingController.destroy));

module.exports = router;