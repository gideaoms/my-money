const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const resolvers = require('./graphql/resolvers');

const setup = app => {
  const schema = makeExecutableSchema({
    typeDefs: importSchema('src/graphql/schema.graphql'),
    resolvers
  });

  app.use('/graphql', graphqlExpress({ schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};

module.exports = setup;
