var http = require('http');

var server = http.createServer(function (request, respsonse) {
	respsonse.writeHead(200, {
		'Content-type': 'text/plain'
	});
	respsonse.end("Hello world");
})

server.listen(8000);

console.log('listening on http://127.0.0.1:8000');
