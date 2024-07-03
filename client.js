const WebSocket = require('ws');
require("dotenv").config();

const ws = new WebSocket(`ws://${process.env.WS_ADDRESS}:${process.env.WS_PORT}/?token=12345&user_id=67890'`);

ws.on('open', function open() {
    console.log('connected');
    ws.send('Hello Server!');
});

ws.on('message', function incoming(data) {
    console.log(`Received: ${data}`);
});

ws.on('close', function close() {
    console.log('disconnected');
});
