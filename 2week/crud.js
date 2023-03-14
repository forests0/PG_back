var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
const hostname = '127.0.0.1';
const port = 80; 

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "create" :
            break;
        case "read" :
            const userfile = fs.readFileSync('./logintest.json', 'utf8');
			const jsonData = JSON.parse(userfile);
            res.end(jsonData)
            break;
        case "update" :
            break;
        case "delete" :
            break;
    }
})

server.listen(hostname,port, () => {
    console.log(`http://127.0.0.1:80`)
})