// // require fs module
// const http = require("http");
// // define two constants, the host and port 
// const host = 'localhost';
// const port = 8080;
// const fs = require('fs').promises;
// // modifying requestListener() to read the file:

// const requestListener = function (req, res) {

//     fs.readFile(__dirname +"views/index.html")
//     .then(contents => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//     }).catch(err => {
//         res.writeHead(500);
//         res.end(err);
//         return;
//     });

// };
const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about",function(req,res){
    res.sendFile(__dirname + "/about.html");
});

app.get("/contact",function(req,res){
  res.sendFile(__dirname + "/contact.html");
});

// create our server and make use of our request listener:

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

app.listen(8000);
