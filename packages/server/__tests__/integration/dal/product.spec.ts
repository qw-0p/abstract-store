import * as productDal from '@db/dal/product';
import { Product } from '@db/models';

describe('Product Data Layer', () => {
  let productId: number;
  const payload = {
    name: 'New Product',
    price: 200,
    companyId: 1,
    description: 'Product description',
    ownerId: 1,
    slug: 'new-product',
  };

  beforeAll(async () => {
    await Product.destroy({ where: {}, force: true });
  });

  beforeEach(async () => {
    const product = await productDal.create(payload);
    productId = product.id;
  });

  afterEach(async () => {
    await Product.destroy({ where: {}, force: true });
  });

  describe('Create product', () => {
    it('should create and return a Product instance', async () => {
      const product = await productDal.create({
        name: 'Another Product',
        price: 300,
        companyId: 2,
        description: 'Another description',
        ownerId: 2,
        slug: 'another-product',
      });

      expect(product).not.toBeNull();
      expect(product.name).toEqual('Another Product');
    });
  });

  describe('Get all products', () => {
    it('should return count and array of products', async () => {
      const { count } = await productDal.findAndCountAll({});
      expect(count).toBeGreaterThan(0);
    });
  });

  describe('Update product', () => {
    it('should update and return a Product instance', async () => {
      const updatedData = {
        name: 'Updated new product',
        price: 250,
      };

      const updatedProduct = await productDal.updateById(
        productId,
        updatedData,
      );
      expect(updatedProduct.name).toEqual(updatedData.name);
      expect(updatedProduct.price).toEqual(updatedData.price);
    });
  });

  describe('Delete product by id', () => {
    it('should delete product by id and return boolean', async () => {
      const isDeleted = await productDal.deleteById(productId);
      expect(isDeleted).toBeTruthy();
    });
  });
});
