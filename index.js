const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World Min')
})

app.get('/Hello', function (req, res) {
    res.send('Hello World Khant')
  })

app.listen(3000)