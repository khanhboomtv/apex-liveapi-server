const WebSocket = require('ws');

const ws = new WebSocket('ws://ec2-54-123-45-67.compute-1.amazonaws.com:8081');

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
