import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";
import { sql } from "drizzle-orm";
import cors from "@elysiajs/cors";

// const result = await db.select().from(users);
const result = await db.get(sql`select 'hello world' as message`);
const app = new Elysia()
  .use(cors())
  .get("/", () => `Hello from Elysia, ${result}`).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
