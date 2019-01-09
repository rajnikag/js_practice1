var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("First change");
  res.write("Second change");
  res.write("Third change");
  res.write("forth change");

  res.end('Hello World!');
}).listen(8080);