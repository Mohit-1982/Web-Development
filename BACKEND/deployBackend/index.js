require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login First...</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("Welcome to Youtube.com");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})