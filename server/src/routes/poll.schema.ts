import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { connection } from '../db/init';
import { Poll } from '../entity/Poll';
import pollSchema from '../JSONSchemas/poll';

export default async function router(server: FastifyInstance) {
  const getAllOpt: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: pollSchema
        }
      }
    }
  };

  server.get('/', getAllOpt, async (request, reply) => {
    const allPoll = connection?.manager.getRepository(Poll).find();
    return allPoll;
  });
}
