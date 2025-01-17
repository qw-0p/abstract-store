import {
  User,
  Basket,
  BasketProduct,
  Category,
  TypeProduct,
  Rating,
  Product,
  Company,
  ProductInfo,
} from '.';

const setupAssociations = () => {
  User.hasMany(Company, { foreignKey: 'owner_id', sourceKey: 'id' });
  Company.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

  User.hasOne(Basket, { foreignKey: 'owner_id', sourceKey: 'id' });
  Basket.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

  User.hasMany(Category, { foreignKey: 'owner_id', sourceKey: 'id' });
  Category.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

  User.hasMany(Product, { foreignKey: 'owner_id', sourceKey: 'id' });
  Product.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

  Category.hasMany(Product, { foreignKey: 'category_id', sourceKey: 'id' });
  Product.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'id' });

  Company.hasMany(Product, { foreignKey: 'company_id', sourceKey: 'id' });
  Product.belongsTo(Company, { foreignKey: 'company_id', targetKey: 'id' });

  User.hasMany(Rating);
  Rating.belongsTo(User);

  Basket.hasMany(BasketProduct);
  BasketProduct.belongsTo(Basket);

  Product.hasMany(Rating);
  Rating.belongsTo(Product);

  Product.hasMany(BasketProduct);
  BasketProduct.belongsTo(Product);

  Product.hasMany(ProductInfo, { as: 'info' });
  ProductInfo.belongsTo(Product);

  Category.belongsToMany(Company, { through: TypeProduct });
  Company.belongsToMany(Category, { through: TypeProduct });
};

export default setupAssociations;
