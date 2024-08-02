const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000
const cors = require('cors')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors());

app.get('/people/:person', db.getPerson)

app.get('/', (req, res) => {
  res.send('Welcome to express backend!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

