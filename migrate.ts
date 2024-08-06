// import { migrate } from 'drizzle-orm/postgres-js/migrator';
// import { db, connection } from './server/db/db';

// await migrate(db, {migrationsFolder: './drizzle/'})
// console.log('migration complete')
// await connection.end()

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
await migrate(drizzle(migrationClient), { migrationsFolder: "./drizzle" });
console.log("migration complete")