import { Client } from 'pg';

const client = new Client({
  user: 'subham',
  host: 'localhost',
  database: 'retail',
  password: 'secretpassword',
  port: 5432,
})

export default client;
