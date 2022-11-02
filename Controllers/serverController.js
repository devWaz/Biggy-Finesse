export const index = async (req , res) => {
    let referralCode = ""
    if (req.query.referral_code){
        referralCode = req.query.referral_code
    }

    return res.status(200).render("index.ejs" , {referralCode})
}