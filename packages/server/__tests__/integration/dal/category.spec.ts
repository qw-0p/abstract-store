import * as categoryDal from '@db/dal/category';
import Category from '@db/models/Category';

describe('Category Data Layer', () => {
  beforeAll(async () => {
    await Category.destroy({ where: {} });
  });

  afterAll(async () => {
    await Category.destroy({ where: {} });
  });

  const payload = {
    name: 'New category',
    ownerId: 1,
  };

  let categoryId: number = 1;

  describe('Create category', () => {
    it('should create and return an object of category', async () => {
      payload['ownerId'] = global.testUserId;

      const category = await categoryDal.create(payload);
      categoryId = category.id;
      expect(category).toBeInstanceOf(Category);
    });
  });

  describe('Delete category by id', () => {
    it('should delete category by id and return a boolean', async () => {
      const deleteCategory = await categoryDal.deleteById(categoryId);
      expect(deleteCategory).toBeTruthy();
    });
  });
});
