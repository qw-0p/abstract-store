import { agent as _request } from 'supertest';

import { get as getApplication } from '../src/index';

export const request = _request(getApplication());

export const clearDatabase = async () => {
  const db = getApplication().get('db');
  await db.sequelize.query('TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;');
  await db.sequelize.query(
    'TRUNCATE TABLE "companies" RESTART IDENTITY CASCADE;',
  );
  await db.sequelize.query(
    'TRUNCATE TABLE "products" RESTART IDENTITY CASCADE;',
  );
  await db.sequelize.query(
    'TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE;',
  );
};
