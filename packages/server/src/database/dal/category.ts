import Category, { CategoryInput, CategoryOutput } from '../models/Category';

export const create = async (
  payload: CategoryInput,
): Promise<CategoryOutput> => {
  return await Category.create(payload);
};

export const deleteById = async (id: number): Promise<boolean> => {
  const isDeleted = await Category.destroy({
    where: { id },
  });

  return !!isDeleted;
};
