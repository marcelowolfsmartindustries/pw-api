require("dotenv").config()

const cors = require("cors")
const express = require("express")

const router = require("./routes/index.js")
const database = require("./data/context/db")

const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", router)

database.sync({ force: false, alter: true }).catch((e) => console.log(e))

app.listen(port, () => console.log("Express server listening on port", port))
