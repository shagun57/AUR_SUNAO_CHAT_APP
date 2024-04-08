import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id

        //find all users  except the current user(ne - not equal) and sort them.
        const filterAllUsers = await User.find({_id: {$ne:  loggedInUserId}})
        .select('-password')
        .sort({username: 1})

        res.status(200).json(filterAllUsers)
    } catch (error) {
        console.log("error in get user controller", error.message);
        res.status(500).json({Error: "Internal Server Error"});
    }
}

