# Express

I used to work with Express more than I do now. What I like is that it manages to reveal a bit more about how the internet works while being clean and quite easy to read.

To set up a small Express app, start with adding the module to your project:

```bash
npm install express # --save to set up in package.json and --no-save to skip package.json
```

That should add Express to your node modules.

Then you want to set up your server.

**server.js**

```javascript
const express = require('express')
const app = express()
const port = 3001
```

Notice setup requires the express module, creates and instance, and sets up a port you intend to listen on.

Then you can write out a route response!

```javascript
app.get('/', (request, response) => {
    response.send('Hi hi hi!')
})
```

Finally, tell the app to listen:

```javascript
app.listen(port, () => {
    console.log(`I'm listening on port ${port}!`)
})
```

Visit locahost at the port you specified and be amazed!
