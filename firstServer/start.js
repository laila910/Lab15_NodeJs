// loading the http module that’s standard with all Node.js installations
const http = require("http");
// define two constants, the host and port 
const host = 'localhost';
const port = 8000;
// handle an incoming HTTP request and return an HTTP response
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};
// create our server and make use of our request listener:

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});