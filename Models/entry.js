import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    referral_code : {
        type: String,
        required : [true , "Please enter your referral code"]
    },
    referee : {
        type : String,
        required : [true , "Please enter your referee"]
    },
} ,
{
    timestamps : true
})


export default mongoose.model("entry" , entrySchema);