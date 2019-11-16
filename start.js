const server = require('./createServer').create(),
    setupSocket = require('./server/socketmanage').setupSocket,
    io = require('socket.io')(server, {});

const SOCKET_LIST = {};

io.sockets.on('connection', socket => 
{

    console.log('+ socket connection');
    setupSocket(socket, SOCKET_LIST);

});
