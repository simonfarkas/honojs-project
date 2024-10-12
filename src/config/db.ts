import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { mySchema } from "../database/models/user";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  port: 8889,
});

export const db = drizzle(connection)

