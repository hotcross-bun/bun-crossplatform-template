import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
sqlite.exec("PRAGMA journal_mode = WAL;");
export const db = drizzle(sqlite);
