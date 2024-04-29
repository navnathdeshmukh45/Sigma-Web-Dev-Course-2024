const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {

  console.log("Hello get request")
  res.send('Get request ')
})

app.post('/', (req, res) => {
  console.log("Hello post request")
  res.send('Post request')
})

app.put('/', (req, res) => {
  console.log("Hello put request")
  res.send('Put request')
})

// app.get('/index', (req, res) => {
//   console.log("Hello get request index")
//   res.send('get request index')
// })

app.get('/index', (req, res) => {
  console.log("Hello get request index")
  // res.send('get request index')
  res.sendFile('templates/index.html', {root:__dirname})
})

app.get('/api', (req, res) => {
  res.json({a:1,b:2,c:3, name:["Priya"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})