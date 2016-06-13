var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Hello st06</h1');
});

var port = process.env.PORT || 3000;

server.listen(port);


