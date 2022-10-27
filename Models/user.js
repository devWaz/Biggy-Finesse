import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [true , "Please enter your first name"]
    },
    lastName : {
        type : String,
        required : [true , "Please enter your last name"]
    },
    telephone : {
        type : String,
        required : [true , "Please enter your phone number"]
    },
    email : {
        type : String,
        required : true,
        unique : [true , "Please enter your email"]
    },
    referral_code : {
        type : String,
        required : [true , "Please enter your referral code"]
    }
},
{timestamps : true})

export default mongoose.model("user" , userSchema);