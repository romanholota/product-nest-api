import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class ProductCategory extends Model {
	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

	@Column
	title: string;

}
