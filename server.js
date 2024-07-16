const WebSocket = require('ws');
const axios = require('axios');
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

    ws.on('message', async (message) => {
        console.log(`Received: ${message}`);
        logger.info(Buffer.from(message, "utf-8").toString());
        // try {
        //     const response = await axios.post(`${process.env.BOOM_URL}/api/apex/send-log`, {
        //         message: Buffer.from(message, "utf-8").toString(),
        //         tournamentId: pathSegments[0] || 0,
        //         type: 1
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'bs': process.env.BOOM_SECRET_KEY,
        //         },
        //     });
        //     if (response.status === 200) {
        //         ws.send(JSON.stringify({apiResponse: response.data}));
        //     } else {
        //         ws.send(JSON.stringify({ error: 'Failed to send log' }));
        //     }
        // } catch (error) {
        //     console.log(error);
        //     ws.send(JSON.stringify({ error: error.message }));
        // }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        logger.info('Client disconnected');
    });

    ws.send('Hi there, I am a WebSocket server');
});

console.log(`WebSocket server is running on ws://localhost:${process.env.WS_PORT}`);
