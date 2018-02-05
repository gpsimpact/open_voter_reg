import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
// import { Engine } from 'apollo-engine';
import { formatError } from 'apollo-errors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from '../graphql/schema';

// APOLLO OPTICS SERVICE - TEMPORARILY DISABLED UNTIL API IS MORE COMPLETE
// const engine = new Engine({
//   engineConfig: {
//     apiKey: '#######################', - Add in new API KEY when ready to activate
//     logging: {
//       level: 'WARN', // Engine Proxy logging level. DEBUG, INFO, WARN or ERROR
//     },
//   },
//   graphqlPort: process.env.PORT || 5000, // GraphQL port
//   endpoint: '/graphql', // GraphQL endpoint suffix - '/graphql' by default
//   dumpTraffic: true, // Debug configuration that logs traffic between Proxy and GraphQL server
// });
// engine.start();

const app = express();

app.use(compression());
// app.use(engine.expressMiddleware());
app.get('/status', (req, res) => res.send('Express status: OK')); // todo
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => {
    return {
      schema,
      context: {},
      formatError,
      // tracing: true, // for apollo optics
      // cacheControl: true, // for apollo optics
    };
  })
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default app;
