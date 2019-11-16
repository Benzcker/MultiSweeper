
exports.setupSocket = (socket, SOCKET_LIST) => 
{
    do 
    {
        socket.id = Math.random();
    } 
    while (SOCKET_LIST.hasOwnProperty(socket.id));
    SOCKET_LIST[socket.id] = socket;

    socket.on('createGame', data => 
    {
        if (data.name.length === 0 || data.name.length > 20 || !(/\S/.test(data.name))) 
           // Name existiert nicht,   ist zu lang oder         besteht nur aus Space
        {
            return;
        }

        // Spiel erstellen
    });

    socket.on('disconnect', () => {
        console.log('- socket disconnect');
        delete SOCKET_LIST[socket.id];
    });    
};
