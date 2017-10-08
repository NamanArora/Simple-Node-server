var http = require('http');
var fs = require('fs');

var ip = '192.168.0.106';

var server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    var read = fs.createReadStream(__dirname + '/sample.txt' , 'utf-8');
    read.pipe(res);
});
server.listen(3000,ip || 'localhost');