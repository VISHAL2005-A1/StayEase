const express=require("express");
const router=express.Router({mergeParams:true});
const Review = require("../models/review.js")
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const { isLoggedIn,isReviewAuthor } = require("../middleware.js");
const ReviewController=require("../controllers/review.js");




//Validation Of the Reviews
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    // console.log(result);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


//Reviews
//Post Route
router.post("/",isLoggedIn, validateReview, wrapAsync(ReviewController.reviewPost));
//Delete Review Route
router.delete("/:reviewId",isReviewAuthor,isLoggedIn, wrapAsync(ReviewController.destroy));

module.exports=router;