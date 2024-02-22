const express = require('express')
const app = express()
const port = 3000

//endpoint 
app.get('/', (req, res) => {
    res.send("tiago legal")
})

app.listen(port, () => {
    console.log('variavel ' + port)
    console.log('Listen on ' + {port} )
})