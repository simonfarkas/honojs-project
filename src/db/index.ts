import 'dotenv/config';
import { drizzle } from "drizzle-orm/connect";
import { usersTable } from './schema';

async function fetchUsers() {
  const db = await drizzle("mysql2", process.env.DATABASE_URL ?? 'mysql://root:root@localhost:8889/test');
  
  const users = await db.select().from(usersTable);
  return users;
}

async function addUser(input: { name: string; age: number; email: string }): Promise<void> {
  const db = await drizzle("mysql2", process.env.DATABASE_URL ?? 'mysql://root:root@localhost:8889/test');
  await db.insert(usersTable).values({ name: input.name, age: input.age, email: input.email });
}

export { fetchUsers, addUser };
