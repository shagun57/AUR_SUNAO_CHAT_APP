import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"
import bcrypt from "bcryptjs"

const signup = async (req,res) => {
    try {
        
        const {fullName, username, email, password, confirmPassword, gender} = req.body

        if(!fullName || !username || !email ||!password || !confirmPassword ||  !gender ){
            return res.status(400).json({msg: 'All fields required'})
        }
        
        if(password !== confirmPassword){
            return res.status(400).json({error: "password donot match"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        throw new ApiError(400, "Invalid email address");
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({msg: "User already exist"})
        }

        const existingUsername = await User.findOne({username})
        if(existingUsername){
            return res.status(400).json({msg:"Username already taken"})
        }

        const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const createUser = new  User ({
            fullName,
            username,
            email,
            password,
            gender,
            profilePic: gender === 'male' ?  maleProfilePic : femaleProfilePic
        })

        if(createUser){
            
            generateTokenAndSetCookie(createUser._id, res)
            await createUser.save()

        

        return res.status(201).json({
            _id: createUser._id,
            fullName:  createUser.fullName,
            username: createUser.username,
            profilePic: createUser.profilePic
         })

        }else{
            res.status(400).json({error: "Invalid user data"})
        }      
    } catch (error) {
        console.log("Error in signup controller: ", error.message);
        res.status(500).json({error: 'Internal server error'})
    }
}

const login = async (req,res) => {
    try {

        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({msg: "Please enter all fields"})
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({msg:"User doesn't exist, please register"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!isPasswordCorrect){
            return res.status(401).json({msg:"Password incorrect, try again"})
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            msg:'Logged In Successfully',
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {

        console.log("Error in login controller: ", error.message);
        res.status(500).json({error: 'Internal server error'})
    
    }
}

const logout = async (req,res) => {
    try {
        
        res.cookie('jwt', '', {maxAge: 0})
        res.status(200).json({msg: "logged out successfully"})

    } catch (error) {

        console.log("Error in logout controller: ", error.message);
        res.status(500).json({error: 'Internal server error'})
    
    }
}

export {
    login,
    signup,
    logout
}