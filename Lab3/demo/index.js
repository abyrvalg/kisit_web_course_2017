var http = require('http');

http.createServer(function(req, res){
	res.end('<h1>hi</h1>');
	console.log("someone's in")
}).listen(80);