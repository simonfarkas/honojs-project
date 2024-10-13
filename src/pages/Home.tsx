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
    {error && <p>{error}</p>}
  </Layout>
)
