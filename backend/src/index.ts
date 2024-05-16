import { Hono } from 'hono';
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

app.route('/app/v1/user', userRouter);
app.route('/app/v1/blog', blogRouter);


export default app;
