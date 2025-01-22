import * as categoryDal from '@db/dal/category';
import Category, { CategoryOutput } from '@db/models/Category';

describe('Category Data Layer', () => {
  let createdCategory: CategoryOutput;
  const payload = {
    name: `Category name-${Date.now()}`,
    ownerId: 1,
  };
  beforeAll(async () => {
    await Category.destroy({ where: {} });
  });

  afterAll(async () => {
    await Category.destroy({ where: {}, force: true });
  });

  describe('Create category', () => {
    it('should create and return an object of category', async () => {
      createdCategory = await categoryDal.create(payload);
      expect(createdCategory).toBeInstanceOf(Category);
    });
  });

  describe('Delete category by id', () => {
    it('should delete category by id and return a boolean', async () => {
      const deleteCategory = await categoryDal.deleteById(createdCategory.id);
      expect(deleteCategory).toBeTruthy();
    });
  });
});
