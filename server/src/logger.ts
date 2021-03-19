import winston, { format } from 'winston';
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
  ],
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    myFormat,
  )
});

export default logger