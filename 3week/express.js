const express = require('express')
const path = require('path')
const app = express();
const port = 8000;


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'test.html'))
})

app.get('/admin', (req,res) => {
    res.send('hello admin!')
})

app.get('/hello', (req,res) => {
    res.send(`hello ${req.query.name}`)
})


app.listen(8000, () => {
    console.log(`http://localhost:${port}`)
})

