import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize';
import { ProductComponentTypeName } from './product-component-type-name.model';

@Injectable()
export class ProductComponentTypeNamesService {

	constructor(
		@InjectModel(ProductComponentTypeName)
		private productComponentTypeNameModel: typeof ProductComponentTypeName
	) {
	}

	findOne(query?: FindOptions) {
		return this.productComponentTypeNameModel.findOne(query);
	}

}
