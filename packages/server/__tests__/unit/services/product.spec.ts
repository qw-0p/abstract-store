import {
  create,
  updateById,
  deleteById,
  getAll,
} from '@db/services/ProductService';
import * as productDal from '@db/dal/product';

jest.mock('@db/dal/product');

describe('Product Service', () => {
  const mockProduct = {
    name: 'New Product',
    price: 200,
    companyId: 1,
    description: 'Product description',
    ownerId: 1,
    slug: 'new-product',
    categoryId: 1,
    img: 'https://example.com/product.jpg',
  };

  describe('create', () => {
    it('should call productDal.create with the correct payload and return the result', async () => {
      (productDal.create as jest.Mock).mockResolvedValue(mockProduct);

      const payload = {
        name: 'New Product',
        price: 200,
        companyId: 1,
        description: 'Product description',
        ownerId: 1,
        slug: 'new-product',
        categoryId: 1,
        img: 'https://example.com/product.jpg',
      };

      const result = await create(payload);

      expect(productDal.create).toHaveBeenCalledWith(payload);
      expect(result).toEqual(mockProduct);
    });
  });
  describe('updateById', () => {
    it('should call productDal.updateById with the correct payload and return the result', async () => {
      (productDal.updateById as jest.Mock).mockResolvedValue(mockProduct);

      const payload = {
        name: 'Updated new product ',
        price: 250,
        description: 'Product description',
        ownerId: 2,
      };
      const productId: number = 1;

      const result = await updateById(productId, payload);

      expect(productDal.updateById).toHaveBeenCalledWith(productId, payload);
      expect(result).toEqual(mockProduct);
    });
  });
  describe('deleteById', () => {
    it('should call productDal.deleteById with the correct payload and return the result', async () => {
      (productDal.deleteById as jest.Mock).mockResolvedValue(mockProduct);

      const productId: number = 1;

      const result = await deleteById(productId);

      expect(productDal.deleteById).toHaveBeenCalledWith(productId);
      expect(result).toEqual(mockProduct);
    });
  });
  describe('getAll', () => {
    it('should call productDal.getAll and return the result', async () => {
      (productDal.findAndCountAll as jest.Mock).mockResolvedValue(mockProduct);

      const result = await getAll({});

      expect(productDal.findAndCountAll).toHaveBeenCalledWith({});
      expect(result).toEqual(mockProduct);
    });
  });
});
