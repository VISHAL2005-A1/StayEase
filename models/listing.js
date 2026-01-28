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

        // default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fdraw-nature-landscape-free-image-3583548%2F&psig=AOvVaw18IurVdeLR60KNzQPmELLT&ust=1757005674052000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiwqauKvY8DFQAAAAAdAAAAABAX",
        // set: (v) => v === "" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fdraw-nature-landscape-free-image-3583548%2F&psig=AOvVaw18IurVdeLR60KNzQPmELLT&ust=1757005674052000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiwqauKvY8DFQAAAAAdAAAAABAX" : v,

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
