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

api.init(app)
websocket.init(app, http)

app.use(express.static(path.join(__dirname, "../homepage")))
app.get('/display/display.css', (req, res) => {
    res.sendFile(path.join(__dirname,'../display/display.css'));
});
app.get('/vacant', function (req, res) {
    let rooms = api.getRooms({})
    rooms.sort((a,b) => a.count - b.count)
    res.render(path.join(__dirname, "../homepage/vacant.ejs"), {rooms:rooms})
});
app.get('/display/:id', function (req, res) {
    let room = api.getRoom({id: req.params.id})
    let color = "#ffffff"
    if(room.count > room.yellow_max)color =  "#ffcdcd"
    else if(room.count > room.green_max)color = "#fcffcd"
    else color = "#cdd8ff"
    var data = {
        id : room.id,
        count: room.count,
        color: color
    }
    res.render(path.join(__dirname, "../display/display.html.ejs"), data)
});

const port = 3000
http.listen(port, () => console.log(`listening on port ${port}!`))