import { create } from '@db/services/CategoryService';
import * as categoryDal from '@db/dal/category';

jest.mock('@db/dal/category', () => ({
  create: jest.fn(),
  deleteById: jest.fn(),
}));

describe('Category Service', () => {
  const mockCategory = {
    name: 'Category name',
    ownerId: 1,
  };

  describe('create', () => {
    it('should call categoryDal.create with the correct payload and return the result', async () => {
      (categoryDal.create as jest.Mock).mockResolvedValue(mockCategory);

      const payload = {
        name: 'Company name',
        ownerId: 1,
      };
      const result = await create(payload);

      expect(categoryDal.create).toHaveBeenCalledWith(payload);
      expect(result).toEqual(mockCategory);
    });
  });

  describe('deleteById', () => {
    it('should call categoryDal.deleteById with the correct id and return the boolean', async () => {
      (categoryDal.deleteById as jest.Mock).mockResolvedValue(true);

      const id = 1;
      const result = await categoryDal.deleteById(id);

      expect(result).toBeTruthy();
    });
  });
});
