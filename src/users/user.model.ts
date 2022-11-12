import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	mail: string;

	@Column
	hash: string;

}
