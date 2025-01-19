import { Basket } from '@db/models';
import * as basketDal from '@db/dal/basket';

describe('Basket Data Layer', () => {
  beforeAll(async () => {
    await Basket.destroy({ where: {} });
  });

  afterAll(async () => {
    await Basket.destroy({ where: {} });
  });

  describe('Create basket', () => {
    it('should create and return an object of basket', async () => {
      const basket = await basketDal.create({ ownerId: global.testUserId | 1 });
      expect(basket).toBeInstanceOf(Basket);
    });
  });
});
