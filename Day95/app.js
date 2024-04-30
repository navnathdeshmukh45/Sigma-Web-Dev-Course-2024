const express = require('express')
const app = express()
const fs = require("fs")
const blog = require("./routes/blog")
const port = 3000

// app.use(express.static("public")) 

app.use('/blog', blog)

// middleware 1 - logger for our appliction
app.use('/', (req, res, next) => {
  // console.log('logged1');

  // To The add request any things
  console.log(req.headers);
  // req.nav = 56;
  req.nav = "I am coder best";

  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`) //add to the timestamp

  console.log(`${Date.now()} is a ${req.method}`);

  // res.send("Hacked by middleware 1")
  next()
})

// middleware 2
app.use('/', (req, res, next) => {
  console.log('logged2');
  res.send("Hacked by middlerware 2")
  next()
})

app.get('/about', (req, res) => {
  res.send(' Hello  World about ! ')
})

app.get('/home', (req, res) => {
  res.send('Hello  World  home! ',req.nav)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})