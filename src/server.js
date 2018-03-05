import express from 'express';
import pgClient from './database/pg-client';
import routes from './routes.js';

const app = express();

app.set('port', 3000);

app.get('/', (req, res) => res.json({hey: 'hello'}));

routes(app);

const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
