const { required } = require("joi");
const mongoose = require("mongoose");
// const {Schema}=mongoose;
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {

        url: String,
        filename: String,

       
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

// const Listing = mongoose.model("Listing", listingSchema);
module.exports = mongoose.model("Listing", listingSchema);
// module.exports=mongoose.model("Chat",chatSchema);
