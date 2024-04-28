const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World code! we; npx nodemon index.js;\n')
})
app.get('/about/:slug', (req, res) => {
  res.send(`Hello  World ${req.params.slug }`)
})
app.get('/blog/:slug', (req, res) => {
  // logic to fetch {slug} from the db
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params) // will output { slug: 'intro-to-padosi' }
  console.log(req.query) // will output { mode: 'dark', region: 'in' }

  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//       // logic to fetch intro to js from the db
//       res.send('Hello intro-to-js!')
//   })
// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// }) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})