const winston = require('winston');
const {format} = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
    dirname: 'logs',
    frequency: '24h',
    filename: 'apex-liveapi-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '14d'
});

transport.on('rotate', function(oldFilename, newFilename) {

});

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
    ),
    transports: [
        transport
    ]
});

module.exports = { logger };
