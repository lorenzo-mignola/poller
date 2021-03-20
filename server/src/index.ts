import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { startConnection } from './db/init';
import logger from './logger';
import { PollResolver } from './resolvers/PollResolver';

const start = async () => {
  await startConnection();
  const schema = await buildSchema({
    resolvers: [PollResolver]
  });
  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
};

start();
