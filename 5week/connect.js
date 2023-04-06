const express = require('express')
const app = express();
const mysql = require('mysql2')
const dbconfig = require('./mysql_config')
const connection = mysql.createConnection(dbconfig);
const path = require('path')
connection.connect();

//로그인
app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'login.html'))
})
//전체조회
app.get('/users', (req, res) => {
    id = req.query.id;
    connection.query('select * from users', (err, row, fields) => {
        if (err) 
            throw err;
        res.send(row);
    })
})
//등록
app.use('/user/create', (req, res) => {
    switch (req.method) {
        case "get":
            res.send(path.join(__dirname, 'create.html'))
        case "post":
            connection.query(
                `insert into users(name,email,phone,password) values (${req.body.name},${req.body.email},${req.body.phone},${req.body.pwd})`,
                (err, row, fields) => {
                    if (err) 
                        throw err;
                    console.log('user 등록')
                }
            )
    }
})
//id조회
app.get('/users/get', (req, res) => {
    connection.query(
        `select * from users where id = ${req.query.id}`,
        (err, row, fields) => {
            if (err) 
                throw err;
            res.send(row);
            console.log('특정 id 탐색')
        }
    )
})
//수정
app.use('/user/modify', (req, res) => {
    switch (req.method) {
        case "get":
            res.send(path.join(__dirname, 'modify.html'));
        case "post":
            connection.query(
                `update users set name = ${req.body.name}, email = ${req.body.email}, phone = ${req.body.phone}, password = ${req.body.pwd} where id = ${req.query.id}`,
                (err, row, fields) => {
                    if (err) 
                        throw err;
                    console.log('modify successed')
                }
            )
    }
})
//삭제
app.get('/user/delete', (req, res) => {
    connection.query(
        `delete from users where id=${req.query.id}`,
        (err, row, fields) => {
            if (err) 
                throw err;
            console.log('delete succeed')
        }
    )
})

app.listen(8006, () => {
    console.log('http://localhost:8006')
})