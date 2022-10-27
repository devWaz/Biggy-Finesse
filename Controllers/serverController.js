export const index = async (req , res) => {
    return res.status(200).json({
        error: false,
        message: "Server Active"
    })
}