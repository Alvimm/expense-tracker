// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
// import * as schema from './schema/expenses';

// export const connection =  postgres({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     ssl: { rejectUnauthorized: false },
// })

// export const db = drizzle(connection, {schema});

import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { z } from "zod";

const PostgresEnv = z.object({
  DATABASE_URL: z.string().url(),
});
const ProcessEnv = PostgresEnv.parse(process.env);

// for query purposes
const queryClient = postgres(ProcessEnv.DATABASE_URL);
export const db = drizzle(queryClient);