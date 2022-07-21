const express = require('express')
const app = express()

app.use(express.json())

// get request
app.get('/', (req, res) => {
    res.json({ 'method': 'get' })
})

// post request
app.post('/', (req, res) => {
    let data = req.body
    res.json({ 'method': 'post', data })
})

// put request
app.put('/', (req, res) => {
    let data = req.body
    res.json({ 'method': 'put', data })
})

// delete request
app.delete('/', (req, res) => {
    let data = req.body
    res.json({ 'method': 'delete', data })
})


app.listen(8000, (err) => { err ? console.log(err) : console.log('server running at port 8000') })