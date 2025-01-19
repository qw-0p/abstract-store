import User, { UserOutput } from '@db/models/User';
import * as userDal from '@db/dal/user';

describe('User Data Access Layer', () => {
  let createdUser: UserOutput;
  const payload = {
    email: 'johndoe@example.com',
    password: 'hashedpassword',
  };

  beforeAll(async () => {
    await User.destroy({ where: {} });
  });

  afterAll(async () => {
    await User.destroy({ where: {} });
  });

  describe('Create user', () => {
    it('should create and return an object of user', async () => {
      createdUser = await userDal.create(payload);

      expect(createdUser).toBeInstanceOf(User);
    });
  });

  describe('Get user by email', () => {
    it('should return an object of user', async () => {
      const user = await userDal.getByEmail(payload.email);

      expect(user).not.toBeNull();
    });
  });
});
