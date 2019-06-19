# Node

It's been a while since I've done this one and I'm glad I did.

For a simple Node server, you have to make sure you are requiring the `http` library.

**server.js**

```javascript
const http = require('http`);
```

Then you want to set up the host and post you intend to use.

```javascript
const host = '127.0.0.1';
const port = 3001;
```

Then, you code up a response function using `http's` `.createServer()` method.

```javascript
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content', 'text/plain');
    response.end('Aye!')
})
```

Notice that writing this response is a bit more involved. You the developer must supply the status code and set the header info.

The last thing you need to do for your server run the listen method on it passing in the port and the host that you set up earlier:

```javascript
server.listen(port, host, ()=> {
    console.log(`Your server is running on port ${port}!`)
})
```

Lastly use node to run the file in the terminal:

```bash
node server.js
```

Visit localhost at the port you specified and be amazed!

