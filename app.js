var http = require('http');

var ip = '192.168.0.106';

var server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('hello gangsta');
});
server.listen(3000,ip || 'localhost');