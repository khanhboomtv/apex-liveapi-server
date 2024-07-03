const WebSocket = require('ws');
const { logger } = require('./logger');
const url = require('url');
require("dotenv").config();

const server = new WebSocket.Server({ port: process.env.WS_PORT });

server.on('connection', (ws, req) => {
    const pathname = url.parse(req.url).pathname;
    const pathSegments = pathname.split('/').filter(segment => segment);
    console.log('New client connected');
    logger.info('New client connected');
    console.log('Path segments:', pathSegments);
    logger.info('Path segments: ' + JSON.stringify(pathSegments));

    ws.on('message', message => {
        console.log(`Received: ${message}`);
        logger.info(Buffer.from(message, "utf-8").toString());
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        logger.info('Client disconnected');
    });

    ws.send('Hi there, I am a WebSocket server');
});

console.log(`WebSocket server is running on ws://localhost:${process.env.WS_PORT}`);
