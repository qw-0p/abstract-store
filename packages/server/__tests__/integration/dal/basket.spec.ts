import { Basket } from '@db/models';
import * as basketDal from '@db/dal/basket';
import * as generateData from '../../generateData';

describe('Basket Data Layer', () => {
  let userId: number;

  beforeAll(async () => {
    userId = (await generateData.createUser()).id;
    await Basket.truncate({ cascade: true });
  });

  afterAll(async () => {
    await Basket.truncate({ cascade: true });
    await generateData.clearUsers();
  });

  describe('Create basket', () => {
    it('should create and return an object of basket', async () => {
      const basket = await basketDal.create({ ownerId: userId });
      expect(basket).toBeInstanceOf(Basket);
    });
  });
});
