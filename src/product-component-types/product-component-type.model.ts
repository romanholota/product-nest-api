import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class ProductComponentType extends Model {
	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	key: string;

	@Column
	name: string;

}
