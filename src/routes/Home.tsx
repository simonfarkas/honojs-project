import { Hono } from 'hono';
import { addUser, fetchUsers } from '../db';
import { Home } from '../pages/Home';

const app = new Hono();

app.get('/', async (c) => {
  const users = await fetchUsers();

  const error = c.req.query('error') || null;

  return c.html(<Home users={users} error={error ?? ''} />);
});

app.post('/add-user', async (c) => {
  const { name, age, email } = await c.req.parseBody();

  try {
    await addUser({ name: String(name), age: Number(age), email: String(email)});
    return c.redirect('/'); 
  } catch (error) {
    return c.redirect('/?error=Failed to add user');
  }
});

export default app;
