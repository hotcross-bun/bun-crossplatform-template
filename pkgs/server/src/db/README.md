This setup was made by following the Drizzle Bun guide here: https://bun.sh/guides/ecosystem/drizzle

Before starting, you should probably run the following:

1. `bun migrate` (does the migration using `migrate.ts` script as described in the guide + builds db)
2. `bun run src/db/seed.ts` (to seed)

and if you end up changing the schema:

1. `bun generate` (generates migration)
2. `bun migrate` (does the migration using `migrate.ts` script as decsribed in the guide)

If you don't actually want to use the given `./schema.ts`, be our guest:
1. delete the `/drizzle` folder entirely
2. write your schema in `./schema.ts`
3. `bun generate` (generates migration)
4. `bun migrate` (does the migration using `migrate.ts` script as decsribed in the guide)