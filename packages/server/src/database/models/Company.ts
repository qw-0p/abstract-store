import {
  DataTypes,
  Model,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import { User } from '.';

interface CompanyAttributes {
  id: number;
  name: string;
  logo?: string;
  ownerId: ForeignKey<User['id']>;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export type CompanyInput = Optional<CompanyAttributes, 'id' | 'logo'>;

export type CompanyOutput = Required<CompanyAttributes>;

class Company
  extends Model<CompanyAttributes, CompanyInput>
  implements CompanyAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare logo: string;
  declare ownerId: ForeignKey<User['id']>;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
      field: 'owner_id',
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'companies',
    sequelize,
  },
);

export default Company;
