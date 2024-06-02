import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

import db, { client } from './index';

async function main() {
  await migrate(db, { migrationsFolder: './drizzle' });
  await client.end();
}

main();
