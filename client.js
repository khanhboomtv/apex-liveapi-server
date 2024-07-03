const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

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