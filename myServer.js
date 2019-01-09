var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("First change");
  res.write("Second change");
<<<<<<< HEAD
  res.write("Third change");
=======
>>>>>>> 21506d20c50e801487e465dc2158bab019fb2bab
  res.write("forth change");

  res.end('Hello World!');
}).listen(8080);