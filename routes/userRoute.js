const path = require('path');

const express = require('express')

const rootDir = require('../util/path');

console.log(rootDir)

const router = express.Router()

router.get('/users', (req, res)=>{
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})


module.exports = router