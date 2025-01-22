import { UserInput, UserOutput } from '../models/User';
import { User, Basket } from '../models';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const newUser = await User.create(payload);
  const { id } = newUser;
  await Basket.create({ ownerId: id });

  return newUser;
};

export const getByEmail = async (email: string): Promise<UserOutput> => {
  const user = await User.findOne({ where: { email } });
  return user ?? ({} as UserOutput);
};
