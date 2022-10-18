import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { Component } from 'src/components/component.model';
import { Product } from 'src/products/product.model';

@Table
export class ProductComponent extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

    @ForeignKey(() => Product)
    @Column
    productId: number;

    @ForeignKey(() => Component)
    @Column
    componentId: number;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => Component)
    component: Component;

}