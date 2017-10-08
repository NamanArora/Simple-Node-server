var http = require('http');

listener =(req,res) =>{
   
}

var server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('hello nigga');
});
server.listen(3000,'localhost');