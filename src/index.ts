import express, { type Request, type Response, type NextFunction } from 'express';
import usersRouter from './routes/users.ts';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Mount the users router
app.use('/users', usersRouter);

// Error-handling middleware (must have 4 arguments)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});