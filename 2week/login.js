var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
const hostname = '127.0.0.1';
const port = 80; 

const server = http.createServer(function(req, res){ 
	res.setHeader('Content-Type', 'text/plain');
	if(req.url === '/login') {
		if(req.method == 'GET') {
			fs.readFile('form.html', function(err, data) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
		} else if(req.method =='POST') {
			const userfile = fs.readFileSync('./logintest.json', 'utf8');
			const jsonData = JSON.parse(userfile);
			//console.log(jsonData)
			req.on('data', function(datas) {
				//console.log(datas.toString());
				var data = querystring.parse(datas.toString());
				res.writeHead(200, {'Content-Type':'text/html'});
				if(data.id == jsonData.id && data.pwd == jsonData.pwd) {
					res.end(`id : ${data.id} | pwd : ${data.pwd}`);
				}
				else {
					res.end('Not Login. Go back')
				}
			});
		}
	}
	else {
		res.end('go to /login')
	}
})
	
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});