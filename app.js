class Room{
  constructor(id, name, count = 0, green_max = 3, yellow_max = 5){
    this.id = id
    this.name = name
    this.count = count
    this.green_max = green_max
    this.yellow_max = yellow_max
  }
}
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.urlencoded({
    extended: true
}));

rooms = {}

app.use(bodyParser.json());
app.post('/auth/', (req, res) => {
  let body = req.body;
  switch(body.type){
    case "create-room" : 
      createRoom(body, res)
      break
    case "get-room":
      getRooms(body, res)
      break
    case "get-rooms":
      getRooms(body, res)
      break
    case "update-room":
      updateRoom(body, res)
      break
    default:
      wrongRes(res, "wrong type name")
  }

  console.log(req.body)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let test = 'no init'
function updateRoom(body, res){
  if(!body.id)wrongRes("didn't have id")
  if(!body.value)wrongRes("didn't have value")
  rooms[body.id].value += parseInt(body.value)
  collectRes(res)
}
function getRooms(body, res){
  res.send(rooms)
}
function createRoom(body, res){
  if(!body.name)wrongRes(res, "didn't have name")
  new_id = Math.floor(Math.random() * 10000)
  rooms[new_id] = new Room(new_id, body.name)
  collectRes(res)
}
function wrongRes(res, description = ""){
  res.send("NG: " + description +  "\n")
}
function collectRes(res){
  res.send("OK\n")
}