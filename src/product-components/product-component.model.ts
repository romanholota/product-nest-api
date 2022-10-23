import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { ProductComponentType } from '../product-component-types/product-component-type.model';
import { Product } from '../products/product.model';

@Table
export class ProductComponent extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

	@Column
	value: string;

	@ForeignKey(() => Product)
	@Column
	productId: number;

    @ForeignKey(() => ProductComponentType)
    @Column
    productComponentTypeId: number;

	@BelongsTo(() => Product)
	product: Product;

    @BelongsTo(() => ProductComponentType)
    productComponentType: ProductComponentType;

}