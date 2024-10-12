import { FC } from 'hono/jsx';

const Top: FC<{ users: Array<{ id: number; name: string; age: number; email: string }>; addUser: (input: { name: string; age: number; email: string }) => Promise<void> }> = ({ users, addUser }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} - {user.email}</li>
        ))}
      </ul>
      <form action="/add-user" method="post">
        <input type="text" name="name" placeholder="name" required />
        <input type="number" name="age" placeholder="age" required />
        <input type="email" name="email" placeholder="email" required />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Top;
