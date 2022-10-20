import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table
export class Item extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

	@Column
	partNumber: string;

	@Column({
		type: DataTypes.TEXT,
		get(this: Item) {
			return JSON.parse(this.getDataValue('specs'))
		},
		set(this: Item, value: any) {
			this.setDataValue('specs', JSON.stringify(value))
		}
	})
	specs: string;


}