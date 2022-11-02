import User from "../Models/user.js"
import Entry from "../Models/entry.js"

export const listWinners = async (req , res) => {
    try {
        const pipeline = [
            // Build Entry Pipeline
            {
                $group: {
                    _id: "$user",
                    no_of_entries: { $sum : 1 },
                },
            },
            // Populate User Details
            {
                $lookup: {
                    from: User.collection.name ,
                    localField : "_id",
                    foreignField : "_id" ,
                    as : "user",
                },
            },
            // Unwind User Details
            {
                $unwind : {
                    path: "$user",
                    preserveNullAndEmptyArrays: true,
                },
            },
            // Sort by Number of entries
            {
                $sort: {
                    no_of_entries: -1,
                },
            },
            //limit to 10
            {
                $limit: 10,
            },
        ]

        const entries = await Entry.aggregate(pipeline)
        console.log(entries);
        return res.status(200).render("winners", {entries})
    }
    catch (err) {
        res.status(500).json({
            error: true,
            message: err.message
        })
    }
}

export default {listWinners}