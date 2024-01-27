const express = require("express")
const mongoose = require("mongoose")

const routes = require("./Routes/ToDoRoute")

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors")
app.use(express.json())
app.use(cors())


// conneting to database
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`Connected to the database`);
    }).catch((err)=>{
        console.log(err);
    })

    
app.use(routes)
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})

// KM3ru6KHYrPQeSvy 