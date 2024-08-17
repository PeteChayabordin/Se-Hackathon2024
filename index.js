const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World Min')
})
<<<<<<< HEAD

app.get('/Hello', function (req, res) {
    res.send('Hello World Khant')
  })

=======
app.get('/', function (req, res) {
  res.send('Users')
})
>>>>>>> 78ddd66 (hj)
app.listen(3000)