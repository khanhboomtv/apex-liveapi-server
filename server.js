const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
const { logger } = require('./logger');

server.on('connection', ws => {
    console.log('New client connected');

    ws.on('message', message => {
        console.log(`Received: ${message}`);
        logger.info(Buffer.from(message, "utf-8").toString());
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.send('Hi there, I am a WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:8080');
