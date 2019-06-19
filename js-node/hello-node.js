const http = require("http")

const host = '127.0.0.1';
const port = 3001;

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Aye!');
})

server.listen(port, host, () => {
    console.log(`Your server is running at ${port}!`)
})

