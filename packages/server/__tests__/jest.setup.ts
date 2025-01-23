import dbInit from '@db/init';
import sequelize from '@db/config';

beforeAll(async () => {
  await dbInit();
  await sequelize.authenticate();
  await sequelize.query("SET session_replication_role = 'replica';");
});

afterAll(async () => {
  await sequelize.query("SET session_replication_role = 'origin';");
  await sequelize.close();
});
