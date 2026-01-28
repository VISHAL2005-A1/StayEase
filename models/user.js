const mongoose = require("mongoose");
const {Schema}=mongoose;
const passposrtLocalMongoose=require("passport-local-mongoose");


const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
});

userSchema.plugin(passposrtLocalMongoose);//username,hashing,salting and hash-password automatically implimented
module.exports=mongoose.model('User',userSchema);