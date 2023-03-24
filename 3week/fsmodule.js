const express = require('express')
const path = require('path')
const app = express();
const fs = require('fs')
const port = 80;

app.use('/', (req,res) => {
    fs.readFile('test.html', (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html;charset = utf-8" });
        res.end(data)
    })
})

app.use('/admin', (req,res) => {
    fs.readFile('admin.html', (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html;charset = utf-8" });
        res.end(data)
    })
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80')
})