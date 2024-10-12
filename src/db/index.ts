import 'dotenv/config';
import { drizzle } from "drizzle-orm/connect";
import { eq } from 'drizzle-orm';
import { usersTable } from './schema';

async function fetchUsers() {
  const db = await drizzle("mysql2", process.env.DATABASE_URL ?? 'mysql://root:root@localhost:8889/test');
  
  const users = await db.select().from(usersTable);
  return users;
}

async function addUser() {
  const db = await drizzle("mysql2", process.env.DATABASE_URL ?? 'mysql://root:root@localhost:8889/test');
  
  const user = await db.insert(usersTable).values({ name: 'John', age: 30, email: 'john@gmail.com' });
  return user;
}

export { fetchUsers, addUser };

