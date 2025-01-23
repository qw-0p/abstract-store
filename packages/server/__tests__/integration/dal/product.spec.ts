import Product, { ProductInput } from '@db/models/Product';
import * as productDal from '@db/dal/product';
import sequelize from '@db/config';

const createProduct = async (options: ProductInput) => {
  return await Product.create(options);
};

describe('Product Data Layer', () => {
  let createdProduct: Product;
  const payload = {
    name: 'New Product Name',
    price: 321,
    companyId: 1,
    description: 'New Description',
    ownerId: 1,
    slug: 'new-product-name',
  };

  beforeAll(async () => {
    await sequelize.query("SET session_replication_role = 'replica';");
    await Product.destroy({ where: {}, force: true });
  });

  beforeEach(async () => {
    createdProduct = await createProduct(payload);
  });

  afterEach(async () => {
    await Product.destroy({ where: {}, force: true });
  });

  afterAll(async () => {
    await sequelize.query("SET session_replication_role = 'origin';");
    await Product.truncate({ cascade: true });
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
      const result = await productDal.findAndCountAll({});

      expect(result.count).toBeGreaterThan(0);
    });
  });

  describe('Update product', () => {
    it('should update and return a Product instance', async () => {
      const updatedData = {
        name: 'Updated new product',
        price: 250,
      };

      const updatedProduct = await productDal.updateById(
        createdProduct.id,
        updatedData,
      );
      expect(updatedProduct.name).toEqual(updatedData.name);
      expect(updatedProduct.price).toEqual(updatedData.price);
    });
  });

  describe('Delete product by id', () => {
    it('should delete product by id and return boolean', async () => {
      const isDeleted = await productDal.deleteById(createdProduct.id);

      expect(isDeleted).toBeTruthy();
    });
  });
});
