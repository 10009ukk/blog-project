const express = require('express')
const app = express()
const port = 2008
const config = require('./config')

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port, () => console.log('Server On!!'))