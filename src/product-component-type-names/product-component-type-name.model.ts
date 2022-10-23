import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ProductComponentType } from '../product-component-types/product-component-type.model';

@Table
export class ProductComponentTypeName extends Model {
	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

	@ForeignKey(() => ProductComponentType)
	@Column
	productComponentTypeId: number;

	@BelongsTo(() => ProductComponentType)
	productComponentType: ProductComponentType;

}
