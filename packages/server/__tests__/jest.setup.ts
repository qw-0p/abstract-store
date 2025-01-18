import dbInit from '../src/database/init';
import sequelize from '../src/database/config';
import User, { UserOutput } from '@db/models/User';
import Company, { CompanyOutput } from '@db/models/Company';
import Category, { CategoryOutput } from '@db/models/Category';

beforeAll(async () => {
  await dbInit();
  await sequelize.sync({ force: true });

  const user = await User.create({
    email: 'globaljohndoe@example.com',
    password: 'hashedpassword',
    role: 'ADMIN',
  }).then((data: UserOutput) => {
    global.testUserId = data.id;
    return data;
  });

  await Company.create({
    name: 'Global Company name',
    logo: 'https://example.com/logo.jpg',
    ownerId: user.id,
  }).then((data: CompanyOutput) => (global.testCompanyId = data.id));

  await Category.create({
    name: 'Global Category name',
    ownerId: user.id,
  }).then((data: CategoryOutput) => (global.testCategoryId = data.id));
});

afterAll(async () => {
  await User.destroy({ where: {} });
  await Company.destroy({ where: {} });
  await Category.destroy({ where: {} });
});
