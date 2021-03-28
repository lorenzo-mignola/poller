import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { startConnection } from './db/init';
import logger from './logger';
import { AnswerResolver } from './resolvers/AnswerResolver';
import { PollResolver } from './resolvers/PollResolver';
import { QuestionResolver } from './resolvers/QuestionResolver';

dotenv.config();

const start = async () => {
  await startConnection();
  const schema = await buildSchema({
    resolvers: [PollResolver, QuestionResolver, AnswerResolver],
    nullableByDefault: true
  });
  const server = new ApolloServer({
    schema,
    cors: true,
    introspection: true,
    playground: true
  });

  const { url } = await server.listen(process.env.PORT || 4000);
  logger.info(`Server is running, GraphQL Playground available at ${url}`);
};

start();
