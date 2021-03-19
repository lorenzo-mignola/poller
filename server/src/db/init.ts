import { Connection, createConnection } from 'typeorm';
import logger from '../logger';

let connection: Connection | null = null;

const startConnection = async () => {
  try {
    connection = await createConnection();
    if (connection.isConnected) {
      logger.info('Connected to db');
    }
  } catch (error) {
    logger.error('Error during connection to db', error);
  }
};

export { startConnection, connection };
