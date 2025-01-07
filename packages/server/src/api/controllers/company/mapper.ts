import { CompanyOutput } from '@db/models/Company';
import { Company } from '@api/interfaces/company.interface';

export const toCompany = (product: CompanyOutput): Company => {
  return {
    id: product.id,
    name: product.name,
    logo: product.logo,
    creatorId: product.creatorId,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};