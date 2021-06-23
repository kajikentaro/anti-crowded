let room = require('./Room')
let websocket = require('./websocket')
let init_json = require('./init_json')
let rooms = undefined
const init = (app) => {
  rooms = init_json.init()
  app.post('/api/', (req, res) => {
    let body = req.body;
    switch(body.type){
      case "create-room" : 
        createRoom(body, res)
        break
      case "get-room":
        getRoom(body, res)
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
  function updateRoom(body, res){
    if(!body.id)wrongRes(res, "didn't have id")
    if(!body.value)wrongRes(res, "didn't have value")
    if(!rooms[body.id])wrongRes(res, "room id " + body.id + " was not found")
    rooms[body.id].count += parseInt(body.value)
    websocket.status_change(rooms[body.id])
    collectRes(res)
  }
  function getRoom(body, res){
    if(!body.id)wrongRes(res, "didn't have id")
    if(!rooms[body.id])wrongRes(res, "room id " + body.id + " was not found")
    res.send(rooms[body.id])
  }
  function getRooms(body, res){
    let ans = []
    for(let r in rooms){
      ans.push(rooms[r])
    }
    res.send(ans)
  }
  function createRoom(body, res){
    if(!body.name)wrongRes(res, "didn't have name")
    if(!body.id)wrongRes(res, "didn't have id")
    //new_id = Math.floor(Math.random() * 10000)
    new_id = parseInt(body.id)
    rooms[new_id] = new room.Room(new_id, body.name)
    collectRes(res)
  }
  function wrongRes(res, description = ""){
    res.send("NG: " + description +  "\n")
  }
  function collectRes(res){
    res.send("OK\n")
  }
}
function getRoomJSON(id){
  if(!rooms[id])return {"id":"room id " + id + " was not found"}
  return rooms[id]
}
exports.init = init
exports.getRoomJSON = getRoomJSON