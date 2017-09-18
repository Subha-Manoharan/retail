import express from 'express';

const app = express();

app.set('port', 3000);

var server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
