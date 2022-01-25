const express = require('express')
const app = express()

app.get('/', function (req, res) {
    
  res.send('Hello World fr Express')
})


app.get('/about', function (req, res) {
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.send('Hello World fr Express About')
  })

module.exports = app;