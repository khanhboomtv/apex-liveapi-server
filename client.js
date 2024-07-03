const WebSocket = require('ws');
require("dotenv").config();

const ws = new WebSocket(`ws://${process.env.WS_ADDRESS}:${process.env.WS_PORT}/1000`);

ws.on('open', function open() {
    console.log('Connected');
    ws.send('Hello Server!');
});

ws.on('message', function incoming(data) {
    console.log(`Received: ${data}`);
});

ws.on('close', function close() {
    console.log('disconnected');
});
