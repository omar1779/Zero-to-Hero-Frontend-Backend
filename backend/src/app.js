import express from "express"
import cors from "cors"
import { corsOptions } from "./config/cors.js"
import userRoutes from "./routes/user.routes.js"

const app = express()
const PORT = process.env.PORT || 9000

//middlewares
app.use(cors(corsOptions))
app.use(express.json())

//routes
app.use("/api/users", userRoutes)

//listener
app.listen(PORT, () => {
    console.log("Server running on PORT 9000")
})