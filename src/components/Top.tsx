import { FC } from 'hono/jsx';
import { User } from '../interfaces/User';

interface TopProps {
  users: User[];
}

const Top: FC<TopProps> = ({ users }) => {
  return (
    <div>
      <div class='flex flex-row w-full justify-between px-10'>
        <h1 class='text-2xl'>User List</h1>
        <ul className='flex'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </div>
      <ul class='p-10'>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Top;
