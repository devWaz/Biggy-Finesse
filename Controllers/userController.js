import User from "../Models/user.js";
import Entry from "../Models/entry.js";

//Creating Users
export const SignUp = async (req, res) => {
    try {
        const body = req.body

        const checkEmail = await User.findOne({email: body.email})
        // Check if email already exists
        if (checkEmail) {
            return res.status(400).json({
                error: true,
                message: "email already exists"
            })
        }

        let referral = null
        // Check if ref code exists
        if (body.referral_code) {
            referral = await User.findOne({
                referral_code: body.referral_code
            })
        if (!referral) {
            return res.status(400).json({
                error: true,
                message: "Invalid referral code provided"
            })
        }
        }

        // Generate ref code
        const referralCode = Math.random().toString(36).substring(2 , 8);

        // Create User
        const user = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            telephone: body.telephone,
            email: body.email,
            referral_code: referralCode,
        })

        //Create Entry
        await Entry.create({
            user: user._id,
            referral_code: referralCode,
            referee: user._id
        })

        if (referral) {
            // Create Entry
        await Entry.create({
            user: referral._id,
            referral_code: referral.referral_code,
            referee: user._id
        })
        }

        const referralLink = process.env.BASE_URL + `?referral_code=${referralCode}`
        return res.status(201).render("success" , {
            message : "User Created Successfully! Referral link:" ,
            referral_link : referralLink})
    } 
    catch (err) {
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

export default {SignUp}
