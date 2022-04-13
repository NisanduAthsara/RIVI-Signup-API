const express = require('express')
const app = express()
const routes = require('./routes/router')
const dotenv = require('dotenv/config')
const mongoose = require('mongoose')

const PORT = 8080

app.use(express.urlencoded({extended:true}))

//connect to mongodb
try {
    mongoose.connect(process.env.MONGO,{useNewUrlParser:true},()=>{
        console.log('DB Connected');
    })
} catch (error) {
    console.log(error);
}

app.use(routes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})