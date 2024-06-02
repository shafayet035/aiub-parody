import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

export const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'aiub',
});

async function connect() {
  await client.connect();
}

connect();

const db = drizzle(client);

export default db;
