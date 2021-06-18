let io = undefined
const status_change = (id, value)=>{
    io.emit('message', {type: 'update-room', id: id, value: value});
}
const init = (app, http)=>{
    io = require('socket.io')(http);

    app.get('/' , function(req, res){
        res.sendFile(__dirname+'/index.html');
    });

    io.on('connection',function(socket){
        socket.on('message',function(msg){
            console.log('message: ' + msg);
            io.emit('message', msg);
        });
    });
}
exports.status_change = status_change
exports.init = init