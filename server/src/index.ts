import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import 'reflect-metadata';
import { startConnection } from './db/init';
import logger from './logger';
import poll from './routes/poll.schema';

const server: FastifyInstance = Fastify({
  logger: true
});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
};

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!' };
});

server.register(poll, { prefix: '/poll' });

const start = async () => {
  try {
    await server.listen(3030);
    await startConnection();

    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;
    logger.info(`Server running on http://localhost:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
