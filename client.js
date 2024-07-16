const WebSocket = require('ws');
require("dotenv").config();

const ws = new WebSocket(`ws://${process.env.WS_ADDRESS}:${process.env.WS_PORT}/1000`);

ws.on('open', function open() {
    console.log('Connected');
    const jsonData = { type: 'greeting', message: 'Hello, server!' };
    ws.send(JSON.stringify(jsonData));
});

ws.on('message', function incoming(data) {
    console.log(`Received: ${data}`);
});

ws.on('close', function close() {
    console.log('disconnected');
});
