import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ProductCategory } from '../product-categories/product-category.model';

@Table
export class ProductComponentType extends Model {
	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	key: string;

	@Column
	name: string;

	@ForeignKey(() => ProductCategory)
	@Column
	productCategoryId: number;

	@BelongsTo(() => ProductCategory)
	productCategory: ProductCategory;

}
