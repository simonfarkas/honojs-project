import { FC } from 'hono/jsx';
import { Layout } from '../components/Layout' 
import Top from '../components/Top'
import { User } from '../interfaces/User'

interface HomeProps {
  users: User[];
  error?: string;
}

export const Home: FC<HomeProps> = ({users, error}) => (
  <Layout>
    <Top users={users} />
    <div class='p-10'>
      <form action="/add-user" method="post">
        <input type="text" name="name" placeholder="name" required />
        <input type="number" name="age" placeholder="age" required />
        <input type="email" name="email" placeholder="email" required />
        <button type="submit">Add User</button>
      </form>
    </div>  
  </Layout>
)
