const Listing=require("./models/listing");
const Review=require("./models/review");
const User=require("./models/user.js");
module.exports.isLoggedIn=(req,res,next)=>{
    // console.log(req.originalUrl);
    if (!req.isAuthenticated()) {
         req.session.redirectUrl=req.originalUrl;
        req.flash("errors", "You must be logged in ");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }else{
        res.locals.redirectUrl="/listings";
    }
    next();
};
module.exports.isOwner=async(req,res,next)=>{
  let {id}=req.params;
  
// console.log(req);
  let listing=await Listing.findById(id);
    if(res.locals.currUser&&!listing.owner.equals(res.locals.currUser._id)){

        req.flash("errors","You don't have permission ")
        return res.redirect(`/listings/${id}`);
     }
   
    next();
}
module.exports.isReviewAuthor=async(req,res,next)=>{
  let {id,reviewId}=req.params;
  
  let review=await Review.findById(reviewId);
  console.log(review.author);
    if(res.locals.currUser&&!review.author.equals(res.locals.currUser._id)){

        req.flash("errors","You are not the auther of this review ")
        return res.redirect(`/listings/${id}`);
     }
   
    next();
}