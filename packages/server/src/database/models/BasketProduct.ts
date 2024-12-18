import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface BasketProductAttributes {
	id: number
}

export interface BasketProductInput
	extends Optional<BasketProductAttributes, 'id'> {}

export interface BasketProductOutput
	extends Required<BasketProductAttributes> {}

class BasketProduct
	extends Model<BasketProductAttributes, BasketProductInput>
	implements BasketProductAttributes
{
	declare id: number
}

BasketProduct.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		tableName: 'basket_product',
		sequelize,
	},
)

export default BasketProduct