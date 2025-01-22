import Company, { CompanyOutput, CompanyInput } from '../models/Company';

export const create = async (payload: CompanyInput): Promise<CompanyOutput> => {
  const product = await Company.create(payload);
  return product as CompanyOutput;
};
