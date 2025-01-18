import dbInit from '../src/database/init';
import sequelize from '../src/database/config';
import User, { UserOutput } from '@db/models/User';
import Company, { CompanyOutput } from '@db/models/Company';
import Category, { CategoryOutput } from '@db/models/Category';

declare global {
  let testUserId: number | undefined;
  let testCompanyId: number | undefined;
  let testCategoryId: number | undefined;
}

beforeAll(async () => {
  await dbInit();
  await sequelize.sync({ force: true });
  //
  // const user: UserOutput = await User.create({
  //   email: 'johndoe@example.com',
  //   password: 'hashedpassword',
  //   role: 'ADMIN',
  // });
  //
  // const company: CompanyOutput = await Company.create({
  //   name: 'Company name',
  //   logo: 'https://example.com/logo.jpg',
  //   ownerId: user.id,
  // });

  // const category: CategoryOutput = await Category.create({
  //   name: 'Category name',
  //   ownerId: user.id,
  // });
});
