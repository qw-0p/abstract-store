import { Company } from '@db/models';
import * as companyDal from '@db/dal/company';
import * as generateData from '../../generateData';

describe('Company Data Layer', () => {
  let userId: number;

  beforeAll(async () => {
    await Company.truncate({ cascade: true });
    userId = (await generateData.createUser()).id;
  });

  afterAll(async () => {
    await Company.truncate({ cascade: true });
    await generateData.clearUsers();
  });

  const payload = {
    name: 'New company',
    logo: 'https://example.com/logo.jpg',
    ownerId: 1,
  };

  describe('Create company', () => {
    it('should create and return an object of company', async () => {
      payload['ownerId'] = userId;
      const company = await companyDal.create(payload);
      expect(company).toBeInstanceOf(Company);
    });
  });
});
