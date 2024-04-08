import Jwt  from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) => {
    const token = Jwt.sign({ userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false
    })
}

export default generateTokenAndSetCookie