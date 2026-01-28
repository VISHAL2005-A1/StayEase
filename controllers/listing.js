const Listing = require("../models/listing.js");


module.exports.index= async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
    // res.send(allListings);
};

module.exports.new=(req, res) => {
  
    res.render("listings/new.ejs");
};
module.exports.show=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author",},}).populate("owner");
    if (!listing) {
        req.flash("errors", "Listing you searching for doest'n exist!")
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
    // console.log(listing);
};

module.exports.create=async (req, res) => {
    let url=req.file.path;
    let filename=req.file.filename;
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    await newListing.save();
    req.flash("success", "New listing Created!")
    res.redirect("/listings");
};
module.exports.edit=async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("errors", "Listing you searching for doest'n exist!")
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl= originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs", { listing,originalImageUrl });

};

module.exports.update=async (req, res) => {

    let listing = req.body.listing;
    let { id } = req.params;
    let newlisting=await Listing.findByIdAndUpdate(id, listing, { runValidators: true });
    // console.log(id);
    if(typeof (req.file)!=="undefined"){

       let url=req.file.path;
       let filename=req.file.filename;
       newlisting.image={url,filename};
       await newlisting.save();
    }
    res.redirect(`/listings/${id}`);
};

module.exports.destroy=async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    // console.log(deleteListing);
    req.flash("success", "Listing Deleted!")
    res.redirect(`/listings`)
}
