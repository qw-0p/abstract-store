import { create } from '@db/services/CompanyService';
import * as companyDal from '@db/dal/company';

jest.mock('@db/dal/company', () => ({
  create: jest.fn(),
}));

describe('Company Service', () => {
  const mockCompany = {
    id: 1,
    name: 'Company name',
    logo: 'https://example.com/logo.jpg',
    ownerId: 1,
  };

  describe('create', () => {
    it('should call companyDal.create with the correct payload and return the result', async () => {
      (companyDal.create as jest.Mock).mockResolvedValue(mockCompany);

      const payload = {
        name: 'Company name',
        logo: 'https://example.com/logo.jpg',
        ownerId: 1,
      };
      const result = await create(payload);

      expect(companyDal.create).toHaveBeenCalledWith(payload);
      expect(result).toEqual(mockCompany);
    });
  });
});
