const express = require('express')
const app = express()
const port = 3001

app.get('/', (request, response) => {
    response.send('Hey you guuuuys!!!')
})

app.listen(port, () => {
    console.log(`Your app is running on ${port}!`)
})