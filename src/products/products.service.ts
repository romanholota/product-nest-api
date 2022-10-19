import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { FindOptions } from 'sequelize';
import { map as _map, zipObject as _zipObject } from 'lodash';
import * as xlsx from 'node-xlsx';

@Injectable()
export class ProductsService {

	constructor(
		@InjectModel(Product)
		private productModel: typeof Product
	) {
	}

	findAll(query?: FindOptions) {
		return this.productModel.findAll(query);
	}

	findOne(query?: FindOptions) {
		return this.productModel.findOne(query);
	}

	create(data: any) {
		return this.productModel.create(data);
	}

}
