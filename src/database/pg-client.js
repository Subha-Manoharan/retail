import { Client } from 'pg';

const client = new Client({
  user: 'subham',
  host: 'localhost',
  database: 'retail',
  password: 'secretpassword',
  port: 5432,
})

client.connect()
  .then(() => client.query('SELECT $1::text as message', ['Hello world!']))
  .then(res => console.log(res.rows[0].message))
  .then(() => client.end());

export default client;
