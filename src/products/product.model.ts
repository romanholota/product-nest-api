import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { ProductComponent } from 'src/product-components/product-component.model';

@Table
export class Product extends Model {

	@AutoIncrement
	@PrimaryKey
	@Column
	id: number;

	@Column
	name: string;

    @HasMany(() => ProductComponent)
    productComponents: ProductComponent[]

}