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

	@Column(DataTypes.JSON)
	specs: string;


}