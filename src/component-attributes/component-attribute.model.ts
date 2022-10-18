import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { ComponentAttributeType } from 'src/component-attribute-types/component-attribute-type.model';
import { Component } from 'src/components/component.model';

@Table
export class ComponentAttribute extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

    @Column
    value: string;

    @ForeignKey(() => Component)
    @Column
    componentId: number;

    @ForeignKey(() => ComponentAttributeType)
	@Column
    componentAttributeTypeId: number;

    @BelongsTo(() => Component)
    component: Component;

    @BelongsTo(() => ComponentAttributeType)
    componentAttributeType: ComponentAttributeType;

}