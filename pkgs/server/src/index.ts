import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const result = await db.select().from(users);
const app = new Elysia().get("/", () => `Hello Elysia, ${result}`).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
