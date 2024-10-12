import { FC } from 'hono/jsx'

const Top = ({ users, addUser }: any) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} - {user.email}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Top;
