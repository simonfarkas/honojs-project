import { Hono } from 'hono';
import { addUser, fetchUsers } from '../db';
import Top from '../components/Top';

const app = new Hono();

app.get('/', async (c) => {
  const users = await fetchUsers();
  return c.html(<Top users={users} addUser={addUser} />);
});

app.post('/add-user', async (c) => {
  const { name, age, email } = await c.req.parseBody();

  try {
    await addUser({ name, age: Number(age), email });
    return c.redirect('/'); 
  } catch (error) {
    return c.json({ error: 'Failed to add user' }, 500);
  }
});

export default app;
