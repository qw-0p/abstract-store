import User, { UserOutput } from '@db/models/User';
import * as userDal from '@db/dal/user';

describe('User Data Access Layer', () => {
  let createdUser: UserOutput;
  const payload = {
    email: `johndoe${Date.now()}@example.com`,
    password: 'hashedpassword',
  };

  afterAll(async () => {
    await User.destroy({ cascade: true, truncate: true, force: true });
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
      expect(user).toBeInstanceOf(User);
    });
  });
});
