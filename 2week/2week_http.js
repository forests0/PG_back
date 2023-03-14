const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('qs')
const hostname = '127.0.0.1';
const port = 80; 

const server = http.createServer((req, res) => { 
	res.setHeader('Content-Type', 'text/plain');
    if(req.url === "/admin") {
        fs.readFile('alert.html', (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html;charset = utf-8" });
            res.end(data)
        })
    }
    else if(req.url === "/hello") {
        var parsedUrl = qs.parse(request.url);
        console.log(parsedUrl)
        var name = parsedUrl['/?name']
        console.log(parsedUrl['/?name'])
        response.end(`Hello, ${name}!`)
    }
    else {
        fs.readFile("hello.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html;charset = utf-8" });
            res.end(data);
          });
        }
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

