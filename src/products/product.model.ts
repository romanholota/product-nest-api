import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ProductCategory } from '../product-categories/product-category.model';

@Table
export class Product extends Model {

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
		get(this: Product) {
			return this.getDataValue('specs') ? JSON.parse(this.getDataValue('specs')) : null;
		},
		set(this: Product, value: any) {
			this.setDataValue('specs', JSON.stringify(value))
		}
	})
	specs: string;

	@ForeignKey(() => ProductCategory)
	@Column
	productCategoryId: number;

	@BelongsTo(() => ProductCategory)
	productCategory: ProductCategory

}