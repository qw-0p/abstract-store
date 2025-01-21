import * as categoryDal from '@db/dal/category';
import Category, { CategoryOutput } from '@db/models/Category';
import * as generateData from '../../generateData';

describe('Category Data Layer', () => {
  let userId: number;
  const payload = {
    name: `Category name-${Date.now()}`,
    ownerId: 1,
  };
  let createdCategory: CategoryOutput;

  beforeAll(async () => {
    userId = (await generateData.createUser()).id;
    await Category.truncate({ cascade: true });
  });

  afterAll(async () => {
    await Category.truncate({ cascade: true });
    await generateData.clearUsers();
  });

  describe('Create category', () => {
    it('should create and return an object of category', async () => {
      payload['ownerId'] = userId;
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
