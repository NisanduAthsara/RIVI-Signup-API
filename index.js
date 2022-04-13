const express = require('express')
const app = express()
const routes = require('./routes/user.router')
const dotenv = require('dotenv/config')
const dbConnect = require('./utils/dbConnect')

const PORT = 8080

dbConnect()

app.use(express.urlencoded({extended:true}))

app.use(routes)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})