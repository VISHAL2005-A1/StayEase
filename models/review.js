const mongoose = require("mongoose");
const {Schema}=mongoose;

const reviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
   
        max:5,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
         type:Schema.Types.ObjectId,
        ref:"User",
    },
    image: {

        url: String,
        filename: String,

       
    }
});

module.exports=mongoose.model("Review",reviewSchema);