const express = require('express')
const app = express()

app.use('/', express.static('src'))
app.use('/node_modules', express.static('node_modules'))


app.listen(4000, () => `Server runs on http://localhost:4000`)
