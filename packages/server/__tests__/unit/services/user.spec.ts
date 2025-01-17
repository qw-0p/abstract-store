import { create, getByEmail } from '@db/services/UserService';
import * as userDal from '@db/dal/user';

jest.mock('@db/dal/user');

describe('User Service', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'hashedpassword',
  };

  describe('create', () => {
    it('should call userDal.create with the correct payload and return the result', async () => {
      (userDal.create as jest.Mock).mockResolvedValue(mockUser);

      const payload = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'hashedpassword',
      };
      const result = await create(payload);

      expect(userDal.create).toHaveBeenCalledWith(payload);
      expect(result).toEqual(mockUser);
    });
  });

  describe('getByEmail', () => {
    it('should call userDal.getByEmail with the correct email and return the user', async () => {
      (userDal.getByEmail as jest.Mock).mockResolvedValue(mockUser);

      const email = 'johndoe@example.com';
      const result = await getByEmail(email);

      expect(userDal.getByEmail).toHaveBeenCalledWith(email);
      expect(result).toEqual(mockUser);
    });
  });
});
