const path = require('path')
let websocket = require('./websocket')
let api = require('./api')

const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').Server(app);
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "../homepage")))
api.init(app)
websocket.init(app, http)

let port = 3000
http.listen(port, () => console.log(`listening on port ${port}!`))