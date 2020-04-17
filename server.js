var express = require("express");

var app = express()

app.use(express.static(__dirname))

var messages = [
    { name: 'Lakshan', message: 'hi' },
    { name: 'Sandaruwan', message: 'hello' }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})



var server = app.listen(3000, () => {
    console.log(`server listening on port`, server.address().port);
})  