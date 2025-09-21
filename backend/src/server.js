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
  origin: (process.env.ALLOWED_ORIGIN || '').split(",").map(s => s.trim()).filter(Boolean) || "*",
  credentials: true,


}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/health-check', (req, res) => {
  res.status(200).send({
    time: new Date().toISOString(),
    msg: "OK"
  })
})
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
