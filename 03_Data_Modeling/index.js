import express from 'express'

const app = express()

import 'dotenv/config'

const port = process.env.PORT || 3200

app.get('/', (req, res) => {
    res.send("server is working")
})

app.listen(port, () => {
    console.log(`sever is working at http://localhost:${port}`);
})