import dotenv from 'dotenv';
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` });
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './api/routes';

import init from './database/init';
import { errorsMiddleware } from '@api/middlewares/.';

init();

const PORT = process.env.API_PORT || 8080;
const VERSION = process.env.npm_package_version || '1';

export const get = () => {
  const app: Application = express();

  app.use(morgan('dev'));
  app.use(helmet());
  app.use(express.json());
  app.use(cors());

  const endpoint = `/api/v${VERSION[0]}`;

  app.get('/', async (req: Request, res: Response) => {
    res.status(200).send({
      message: `Server started on: ${PORT}, endpoint: ${endpoint}/`,
    });
  });

  app.use(endpoint, routes);
  app.use(errorsMiddleware);

  return app;
};

const start = async () => {
  const app = get();
  try {
    app.listen(PORT, () => {
      console.info(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
