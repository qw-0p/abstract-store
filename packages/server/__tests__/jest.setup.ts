import dbInit from '../src/database/init';
import sequelize from '../src/database/config';

beforeAll(async () => {
  await dbInit();
});

afterAll(async () => {
  await sequelize.truncate({ cascade: true });
});
