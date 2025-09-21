import express from "express"
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
const app = express()
dotenv.config()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors({
  credentials: true,
  origin: process.env.ALLOWED_ORIGIN
}))
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
