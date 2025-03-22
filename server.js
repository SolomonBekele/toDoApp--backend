const  express = require('express')
const  mongoose = require('mongoose')
const cors = require("cors")
require('dotenv').config()

const router = require('./routes/ToDoRoutes')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Conected to mongodb"))
.catch((err)=> console.log(err))

app.use(router)
app.listen(PORT, () => console.log(` listening on port ${PORT}!`))