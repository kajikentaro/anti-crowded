class Room{
  constructor(id, name, count = 0, green_max = 3, yellow_max = 5){
    this.id = id
    this.name = name
    this.count = count
    this.green_max = green_max
    this.yellow_max = yellow_max
  }
}

exports.Room = Room