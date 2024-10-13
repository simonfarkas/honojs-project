import { FC } from 'hono/jsx'

export const Layout: FC = (props) => (
  <html>
    <script src="https://cdn.tailwindcss.com"></script>
    <body>
      {props.children}
    </body>
  </html>
)
