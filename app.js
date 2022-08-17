const path = require('path');

const express = require('express')

const homeRoute = require('./routes/home')
const userRoute = require('./routes/userRoute')
const rootDir = require('./util/path');

const app = express()

app.use(express.static(path.join(rootDir, 'public')))

app.use(homeRoute)
app.use(userRoute)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(5001, ()=>{
    console.log("server running!")
})