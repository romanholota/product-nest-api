import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { ComponentAttributeType } from 'src/component-attribute-types/component-attribute-type.model';

@Table
export class ComponentType extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

    @HasMany(() => ComponentAttributeType)
    componentAttributeTypes: ComponentAttributeType[];
    
}