import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { ProductComponent } from 'src/product-components/product-component.model';
import { DataTypes } from 'sequelize';

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
			return JSON.parse(this.getDataValue('specs'))
		},
		set(this: Product, value: any) {
			this.setDataValue('specs', JSON.stringify(value))
		}
	})
	specs: string;

    @HasMany(() => ProductComponent)
    productComponents: ProductComponent[]

}