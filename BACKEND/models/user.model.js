import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email:{
        type :String, 
        unique :true, 
        lowercase :true,
        trim :true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength :6 
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic:{
        type: String,
        default: ""
    } 
}, {timestamps: true})

//hashing password

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next()

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model("User", userSchema)

export default User