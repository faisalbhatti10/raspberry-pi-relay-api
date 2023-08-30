const http    = require('http').createServer(handler); //require http server, and create server with function handler()
http.listen(8080); //listen to port 8080

const fs      = require('fs'); //require filesystem module
const io      = require('socket.io')(http) //require socket.io module and pass the http object (server)

// Create a web server and listen on 8080.
function handler(req, res)
{
    fs.readFile(__dirname + '/index.html', function (err, data) { //read file index.html in public folder
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
        res.write(data); //write data from index.html
        return res.end();
    });
}

io.sockets.on('connection', function (socket) {// WebSocket Connection

    socket.on('light', function (data) { //get light switch status from client
	
        const dataParts     = data.split('_');
        const relayNumber   = dataParts[0];
        const relayValue    = dataParts[1];

        console.log('Relay ' + relayNumber +' : '+ (relayValue == 1 ? 'On' : 'Off'));        
    });
});

// Handle Ctrl+C exit cleanly by turning off all relays.
process.on('SIGINT', () => {
    
    process.exit();
});
