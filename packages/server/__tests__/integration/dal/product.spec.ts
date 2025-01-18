import * as productDal from '@db/dal/product';
import sequelize from '@db/config';
import { Company, User } from '@db/models';
import { findAndCountAll } from '@db/dal/product';

describe('Product Data Layer', () => {
  beforeAll(async () => {
    await User.destroy({ where: {} });
    await Company.destroy({ where: {} });

    await User.create({
      email: 'johndoe@example.com',
      password: 'hashedpassword',
      role: 'ADMIN',
    });

    await Company.create({
      name: 'Company name',
      ownerId: 1,
    });
  });

  afterAll(async () => {
    await User.destroy({ where: {} });
    await Company.destroy({ where: {} });
  });

  describe('Create product', () => {
    it('should create and return an object of product', async () => {
      const product = await productDal.create({
        name: 'New Product',
        price: 200,
        companyId: 1,
        description: 'Product description',
        ownerId: 1,
        slug: 'new-product',
      });
      expect(product).not.toBeNull();
    });
  });
  describe('Get all products', () => {
    it('should return an object of product', async () => {
      const products = await productDal.findAndCountAll({});

      expect(products).not.toBeNull();
    });
  });
});
