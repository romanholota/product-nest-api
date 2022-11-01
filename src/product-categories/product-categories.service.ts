import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductCategory } from './product-category.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ProductCategoriesService {

	constructor(
		@InjectModel(ProductCategory)
		private productCategoryModel: typeof ProductCategory
	) {
	}

	findAll(query?: FindOptions) {
		return this.productCategoryModel.findAll(query);
	}

}
