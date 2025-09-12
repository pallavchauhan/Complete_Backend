require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/author', (req, res) => {
  res.send('PALLAV CHAUHAN')
})

app.get('/purpose', (req, res) => {
  res.send('trial deploy')
})

app.get('/login', (req, res) => {
  res.send(`<h1>login successfully</h1>`)
})

const github = {
  "success": {
    "message": "Welcome to JSON Viewer Pro",
    "status_code": 200
  }
}

app.get('/github', (req, res) => {
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
