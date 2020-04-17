var express = require("express");
var bodyparser = require("body-parser");

var app = express()

app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

var messages = [
    { name: 'Lakshan', message: 'hi' },
    { name: 'Sandaruwan', message: 'hello' }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    res.sendStatus(200);

})



var server = app.listen(3000, () => {
    console.log(`server listening on port`, server.address().port);
})  