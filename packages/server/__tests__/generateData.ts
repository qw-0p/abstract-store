import User, { UserInput } from '@db/models/User';
import Company, { CompanyInput } from '@db/models/Company';

export const clearUsers = async () => {
  await User.truncate({ cascade: true });
};

export const clearCompanies = async () => {
  await Company.truncate({ cascade: true });
};

export const createUser = async (data?: UserInput) => {
  return await User.create({
    email: data?.email || 'johndoe@example.com',
    password: data?.password || 'test',
    role: data?.role || 'ADMIN',
  });
};

export const createCompany = async (data?: CompanyInput) => {
  return await Company.create({
    name: data?.name || 'Company name',
    logo: data?.logo || 'https://example.com/logo.jpg',
    ownerId: data?.ownerId || 1,
  });
};
