import { Hono } from 'hono'
import { addUser, fetchUsers } from '../db'
import Top from '../components/Top'

const app = new Hono()

app.get('/', async (c) => {
  const users = await fetchUsers(); 
  const add = await addUser();
  return c.html(<Top users={users} addUser={add} />); 
})

export default app;
