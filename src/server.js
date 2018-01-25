import express from 'express';
import pgClient from './database/pg-client';
const app = express();

app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
