import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import logger from '../logger';

const startConnection = async () => {
  try {
    useContainer(Container);
    const connection = await createConnection();
    if (connection.isConnected) {
      logger.info('Connected to db');
    }
  } catch (error) {
    logger.error('Error during connection to db', error);
    throw new Error('No DB connection');
  }
};

export { startConnection };
