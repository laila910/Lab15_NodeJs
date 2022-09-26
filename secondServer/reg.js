var http = require('http');
var fs = require('fs');
var url = require('url');
function requestHandler (req, res) {
  
    let urlDetails = url.parse(req.url,true);
    console.log(urlDetails);
    if(urlDetails.pathname == "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("index.html",function(error,data){
            console.log(error);
            res.end(data);
        });
    }
    else if(urlDetails.pathname == "/register" && req.method=="POST"){
        req.on('data',(data)=>{
            let user = url.parse("/?"+data.toString(),true).query;
            console.log(url.parse("/?"+data.toString(),true).query.psw);
            UserPass=url.parse("/?"+data.toString(),true).query.psw;
            if(UserPass.length<8){
            data='Error password is less than 8 characters';
              
              res.end(data);
            }else{
                data='Registration success';
                console.log(user);
                res.end(data);
            }
        });
        req.on('end',()=>res.end('done'));
    }   
}

http.createServer(requestHandler).listen(8080);
