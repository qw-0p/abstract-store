import { Company } from '@db/models';
import * as companyDal from '@db/dal/company';

describe('Company Data Layer', () => {
  beforeAll(async () => {
    await Company.truncate({ cascade: true });
  });

  afterAll(async () => {
    await Company.truncate({ cascade: true });
  });

  const payload = {
    name: 'New company',
    logo: 'https://example.com/logo.jpg',
    ownerId: 1,
  };

  describe('Create company', () => {
    it('should create and return an object of company', async () => {
      const company = await companyDal.create(payload);
      expect(company).toBeInstanceOf(Company);
    });
  });
});
