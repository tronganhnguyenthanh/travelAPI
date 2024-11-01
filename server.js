const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/routes.api")
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})
mongoose.connect(process.env.Node_API_URL).then(() => {console.log("Database connected")}).catch(() => {
 console.log("Failed to fetch data")
})
app.use(cors())
app.use(express.json())
app.use("/api", router)
