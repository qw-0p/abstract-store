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

User.hasMany(Rating, { foreignKey: 'user_id', sourceKey: 'id' });
Rating.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

Basket.hasMany(BasketProduct, { foreignKey: 'basket_id', sourceKey: 'id' });
BasketProduct.belongsTo(Basket, { foreignKey: 'basket_id', targetKey: 'id' });

Product.hasMany(Rating, { foreignKey: 'product_id', sourceKey: 'id' });
Rating.belongsTo(Product, { foreignKey: 'product_id', targetKey: 'id' });

Product.hasMany(BasketProduct, { foreignKey: 'product_id', sourceKey: 'id' });
BasketProduct.belongsTo(Product, { foreignKey: 'product_id', targetKey: 'id' });

Product.hasMany(ProductInfo, {
  as: 'info',
  foreignKey: 'product_id',
  sourceKey: 'id',
});
ProductInfo.belongsTo(Product, { foreignKey: 'product_id', targetKey: 'id' });

Category.belongsToMany(Company, { through: TypeProduct });
Company.belongsToMany(Category, { through: TypeProduct });
