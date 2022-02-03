const express = require('express')
const app = express()
const path = require('path'); 

app.get('/', function (req, res) {
    
  //res.sendFile(path.join(process.cwd(),'index.html')); 
  // res.send(__dirname)
  res.send(path.join(process.cwd(), 'src/index.html')); 
})


app.get('/about', function (req, res) {
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.send('Hello World fr Express About')
  })

module.exports = app;