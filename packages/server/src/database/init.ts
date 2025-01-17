import {
  Basket,
  BasketProduct,
  Company,
  Product,
  ProductInfo,
  Category,
  TypeProduct,
  User,
  Rating,
} from './models';
import setupAssociations from '@db/models/associations';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const init = async () => {
  try {
    setupAssociations();
    await User.sync({ alter: isDev || isTest });
    await Company.sync({ alter: isDev || isTest });
    await Category.sync({ alter: isDev || isTest });
    await Product.sync({ alter: isDev || isTest });
    await Basket.sync({ alter: isDev || isTest });
    await TypeProduct.sync({ alter: isDev || isTest });
    await BasketProduct.sync({ alter: isDev || isTest });
    await ProductInfo.sync({ alter: isDev || isTest });
    await Rating.sync({ alter: isDev || isTest });
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
};

export default init;
