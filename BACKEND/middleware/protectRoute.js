import  jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt
        
        if(!token){
            return res.status(401).json({msg: "Unauthorized access - no token"})
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!decodedToken){
            return res.status(401).json({msg: "Unauthorized access - invalid token"})
        }

        const user =  await User.findById(decodedToken.userId).select("-password")
        
        if(!user){
            return res.status(401).json({msg:"No user found with this token"})
        }

        req.user = user;
        next()
    } catch (error) {
        console.log("Error in protect rooute middleware",error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export default  protectRoute;