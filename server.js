var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("Hello universe!")
}).listen(8000, function(){console.log('Lissten on port:8000')})