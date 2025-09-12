// const express = require('express')

import express from 'express'

const app = express()

import 'dotenv/config'

const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send("server is working")
// })

app.use(express.static('dist'))

// jokes sent kr rhe hh
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Bug in Code",
            "content": "Why do programmers hate nature? It has too many bugs."
        },
        {
            "id": 2,
            "title": "Hardware Joke",
            "content": "Why did the computer go to therapy? It had too many hard drives."
        },
        {
            "id": 3,
            "title": "API Humor",
            "content": "I told my friend an API joke... but he didn’t get the response."
        },
        {
            "id": 4,
            "title": "WiFi Joke",
            "content": "Why was the computer cold? It left its Windows open."
        },
        {
            "id": 5,
            "title": "Database Pun",
            "content": "Why did the SQL query cross the road? To join the other table."
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`sever is working at http://localhost:${port}`);
})
