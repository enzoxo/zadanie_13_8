var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response){
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if(request.method === "GET" && request.url === '/cosik') {
		response.write('<h1>Hello World!</h1>');
			response.end();
	} else {
		response.statusCode = 404;
		response.write('<h1>404: Złq ścieżka! </h1>');
		fs.readFile('./cat.jpg');
		response.end();
	}

	
	
});

server.listen(8000);