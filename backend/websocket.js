const path = require('path')
let io = undefined
const status_change = (data) => {
    io.emit('message', data);
}
const init = (app, http) => {
    io = require('socket.io')(http);

    /*
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname,'/../homepage/index.html'));
    });
    */

    io.on('connection', function (socket) {
        socket.on('message', function (msg) {
            console.log('message: ' + msg);
            io.emit('message', msg);
        });
    });
}
exports.status_change = status_change
exports.init = init