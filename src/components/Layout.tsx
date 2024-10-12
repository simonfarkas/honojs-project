import { FC } from 'hono/jsx'

export const Layout: FC = (props) => (
  <html>
    <body>{props.children}</body>
  </html>
)
