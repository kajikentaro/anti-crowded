const path = require('path')
let io = undefined
const status_change = (data) => {
    //io.emit('message', data);
    io.sockets.to(data.id).emit('message', data);
    io.sockets.to('client').emit('message', data);
}
const init = (app, http) => {
    io = require('socket.io')(http);
    io.on('connection', function (socket) {
        socket.on('message', function (msg) {
            console.log('message: ' + msg);
            io.emit('message', msg);
        });

        socket.on('disconnect', function () {
            socket.leave(socket.data.room);
        });
        socket.on('add:display', function (data) {
            socket.join(data.id);
        });
        socket.on('add:client', function (data) {
            socket.join('client');
        });
    });
}
exports.status_change = status_change
exports.init = init