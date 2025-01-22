import sequelize from './config';
import './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';

const init = async () => {
  try {
    await sequelize.sync({ alter: isDev || isTest });
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
};

export default init;
