import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000


//routes import

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDb from "./db/connectMongoDB.js";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//routes declaration through middleware
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running at port: ${PORT} `);
})