import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { ComponentType } from 'src/component-types/component-type.model';
import { ComponentAttribute } from '../component-attributes/component-attribute.model';

@Table
export class Component extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

    @ForeignKey(() => ComponentType)
    @Column
    componentTypeId: number;

    @BelongsTo(() => ComponentType)
    componentType: ComponentType;

	@HasMany(() => ComponentAttribute)
	componentAttributes: ComponentAttribute[]

}