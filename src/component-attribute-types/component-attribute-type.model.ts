import { Table, Column, Model, BelongsTo, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { ComponentType } from 'src/component-types/component-type.model';

@Table
export class ComponentAttributeType extends Model {

	@AutoIncrement
	@PrimaryKey

	@Column
	id: number;

	@Column
	name: string;

	@ForeignKey(() => ComponentType)
	componentTypeId: number;

	@BelongsTo(() => ComponentType)
	componentType: ComponentType;
	
}