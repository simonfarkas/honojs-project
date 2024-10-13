import 'dotenv/config';
import { drizzle } from "drizzle-orm/connect";
import { usersTable } from './schema';

const url = process.env.DATABASE_URL ?? 'mysql://root:root@localhost:8889/test';

async function fetchUsers(): Promise<any> {
  const db = await drizzle("mysql2", url);
  return db.select().from(usersTable);
}

async function addUser(input: { name: string; age: number; email: string }): Promise<void> {
  const db = await drizzle("mysql2", url);
  await db.insert(usersTable).values({ name: input.name, age: input.age, email: input.email });
}

export { fetchUsers, addUser };
