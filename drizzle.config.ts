import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/drizzle',
  dialect: 'postgresql',
  migrations: {
    schema: './src/db/schema.ts',
  },
  dbCredentials: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'aiub',
    port: '5432',
    ssl: false,
  },
});
