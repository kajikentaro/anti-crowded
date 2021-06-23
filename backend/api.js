let room = require('./Room')
let websocket = require('./websocket')
let init_json = require('./init_json')
let rooms = undefined
const init = (app) => {
  rooms = init_json.init()
  app.post('/api/', (req, res) => {
    let body = req.body;
    console.log(body)
    try {
      switch (body.type) {
        case "create-room":
          res.send(createRoom(body))
          break
        case "get-room":
          res.send(getRoom(body, res))
          break
        case "get-rooms":
          res.send(getRooms(body, res))
          break
        case "update-room":
          res.send(updateRoom(body, res))
          break
        default:
          throw "wrong type name"
      }
    } catch (e) {
      console.log(e)
      res.send(e)
    }
  });
}
function updateRoom(body) {
  if (!body.id) throw "didn't have id"
  if (!body.value) throw "didn't have value"
  if (!rooms[body.id]) throw "room id " + body.id + " was not found"
  rooms[body.id].count += parseInt(body.value)
  websocket.status_change(rooms[body.id])
  return "OK"
}
function getRoom(body) {
  if (!body.id) throw "didn't have id"
  if (!rooms[body.id]) throw "room id " + body.id + " was not found"
  return rooms[body.id]
}
function getRooms(body) {
  let ans = []
  for (let r in rooms) {
    ans.push(rooms[r])
  }
  return ans
}
function createRoom(body) {
  if (!body.name) throw res, "didn't have name"
  if (!body.id) throw res, "didn't have id"
  new_id = parseInt(body.id)
  rooms[new_id] = new room.Room(new_id, body.name)
  return "OK"
}
exports.init = init
exports.getRoom = getRoom
exports.getRooms = getRooms