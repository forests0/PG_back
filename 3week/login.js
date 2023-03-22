const express = require('express')
const path = require('path')
const app = express();
const port = 8000;

app.use('/', () => {
    res.setHeader('Content-Type', 'text/plain');
	if(req.url === '/login') {
		if(req.method == 'GET') {
			fs.readFile('form.html', function(err, data) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.send(data);
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
					res.send(`id : ${data.id} | pwd : ${data.pwd}`);
				}
				else {
					res.send('Not Login. Go back')
				}
			});
		}
	}
    else {
        res.send('http://localhost:8000/login')
    }
})

app.listen(8000, () => {
    console.log('http://localhost:8000/login')
})