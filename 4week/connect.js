const express = require('express')
const app = express();
const mysql = require('mysql2')
const dbconfig = require('./mysql_config')
const connection = mysql.createConnection(dbconfig);

connection.connect();

app.get('/', (req,res) => {
    res.send('hi')
})

app.get('/users', (req,res) => {    
    connection.query('select * from users', (err, row, fields) => {
        if(err) throw err;
        console.log(row)
    })
})

app.listen(8006, () => {
    console.log('http://localhost:8006')
})