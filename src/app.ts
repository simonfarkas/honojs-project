import { Hono } from 'hono'
import homeRoute from './routes/Home'

const app = new Hono()

app.route('/', homeRoute)

const port = parseInt(process.env.PORT!) || 3000
console.log(`Running at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
