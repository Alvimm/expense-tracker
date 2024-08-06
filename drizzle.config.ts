// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({
//   schema: './server/db/schema.ts',
//   out: './drizzle',
//   dialect: 'postgresql',
//   dbCredentials: {
//     host: process.env.DB_HOST!,
//     user: process.env.DB_USER!,
//     password: process.env.DB_PASSWORD!,
//     database: process.env.DB_NAME!,
//   },
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schema/expenses.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
