let room = require('./Room')
const default_rooms = [
{type:"create-room", "id":3103, "name":"hello", "green_max":30, "yellow_max":60, "count":0},
{type:"create-room", "id":"career", "name":"hello", "green_max":10, "yellow_max":30, "count":0},
{type:"create-room", "id":3105, "name":"hello", "green_max":20, "yellow_max":40, "count":0},

{type:"create-room", "id":3300, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3301, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3302, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3303, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3304, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3305, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3308, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3309, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3310, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3311, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3312, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3313, "name":"hello", "green_max":50, "yellow_max":80, "count":0},

{type:"create-room", "id":3400, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3401, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3402, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3403, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3405, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3406, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3407, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3408, "name":"hello", "green_max":10, "yellow_max":20, "count":0},

{type:"create-room", "id":3600, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3601, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3602, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3603, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3604, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3605, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3606, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3607, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3608, "name":"hello", "green_max":40, "yellow_max":60, "count":0},
{type:"create-room", "id":3609, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3610, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":3611, "name":"hello", "green_max":10, "yellow_max":20, "count":0},

{type:"create-room", "id":5133, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":5134, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":5135, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":5136, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":5137, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":5138, "name":"hello", "green_max":10, "yellow_max":20, "count":0},

{type:"create-room", "id":5233, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5234, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5235, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5236, "name":"hello", "green_max":80, "yellow_max":100, "count":0},

{type:"create-room", "id":5333, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5334, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5335, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5336, "name":"hello", "green_max":80, "yellow_max":100, "count":0},

{type:"create-room", "id":5405, "name":"hello", "green_max":50, "yellow_max":80, "count":0},

{type:"create-room", "id":5533, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5534, "name":"hello", "green_max":80, "yellow_max":100, "count":0},

{type:"create-room", "id":5235, "name":"hello", "green_max":80, "yellow_max":100, "count":0},
{type:"create-room", "id":5236, "name":"hello", "green_max":80, "yellow_max":100, "count":0},

{type:"create-room", "id":6301, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6302, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6309, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6310, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6317, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6318, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6325, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6326, "name":"hello", "green_max":10, "yellow_max":20, "count":0},

{type:"create-room", "id":6401, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6402, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6405, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6409, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6410, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6413, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6417, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6418, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6421, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6425, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6426, "name":"hello", "green_max":10, "yellow_max":20, "count":0},
{type:"create-room", "id":6429, "name":"hello", "green_max":10, "yellow_max":20, "count":0},

{type:"create-room", "id":6500, "name":"hello", "green_max":30, "yellow_max":60, "count":0},
]
exports.init = ()=>{
	let rooms = {}
	for(let i of default_rooms){	
		rooms[i.id] = new room.Room(i.id, i.name, i.count, i.green_max, i.yellow_max)
	}
	return rooms
}