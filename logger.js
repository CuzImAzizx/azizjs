const path = require('path');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const logFormatter = printf(({ level, message, timestamp }) => `${timestamp} ${level.toUpperCase()}: ${message}`);

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormatter
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(__dirname, 'storage', 'logs', 'logs.log') })
    ]
});

logger.info('The app has started');

module.exports = logger;
