import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { handleApplicationErrors } from './middlewares';
import { userRouter, transactionRouter, } from './routers';
import { loadEnv, connectDb, disconnectDB } from './config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('I am ok'))
  .use('/transaction', transactionRouter)
  .use('/user', userRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
