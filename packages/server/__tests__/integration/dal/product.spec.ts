import * as productDal from '@db/dal/product';
import { Product } from '@db/models';

describe('Product Data Layer', () => {
  beforeAll(async () => {
    await Product.destroy({ where: {} });
  });

  afterAll(async () => {
    await Product.destroy({ where: {} });
  });

  const payload = {
    name: 'New Product',
    price: 200,
    companyId: 1,
    description: 'Product description',
    ownerId: 1,
    slug: 'new-product',
  };
  let productId: number = 1;

  describe('Create product', () => {
    it('should create and return an object of product', async () => {
      payload['ownerId'] = global.testUserId;
      payload['companyId'] = global.testCompanyId;

      const product = await productDal.create(payload);
      productId = product.id;
      expect(product).toBeInstanceOf(Product);
    });
  });

  describe('Get all products', () => {
    it('should return an object of count and array of product', async () => {
      const products = await productDal.findAndCountAll({});
      expect(products.count).toBeGreaterThan(0);
    });
  });

  describe('Update product', () => {
    it('should update and return an object of product', async () => {
      const updatedProduct = await productDal.updateById(productId, {
        name: 'Updated new product',
        price: 250,
      });

      expect(updatedProduct.name).toBe('Updated new product');
      expect(updatedProduct.price).toEqual(250);
    });
  });

  describe('Delete product by id', () => {
    it('should delete product by id and return boolean', async () => {
      const deletedProduct = await productDal.deleteById(productId);

      expect(deletedProduct).toBeTruthy();
    });
  });
});
