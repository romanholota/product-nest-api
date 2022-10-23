import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { FindOptions } from 'sequelize';
import { get as _get, map as _map, zipObject as _zipObject, toLower as _toLower } from 'lodash';
import * as xlsx from 'node-xlsx';
import { ProductComponentType } from '../product-component-types/product-component-type.model';
import { ProductComponentTypeNamesService } from '../product-component-type-names/product-component-type-names.service';

@Injectable()
export class ProductsService {

	constructor(
		@InjectModel(Product)
		private productModel: typeof Product,
		private productComponentTypeNamesService: ProductComponentTypeNamesService
	) {
	}

	findOne(query?: FindOptions) {
		return this.productModel.findOne(query);
	}

	findAll(query?: FindOptions) {
		return this.productModel.findAll(query);
	}

	async parseXls(file) {
		const sheet: any = xlsx.parse(file.buffer)[0]['data'];
		const header = sheet[0];
		const data = sheet.splice(1);
		const parsedProducts = _map(data, row => _zipObject(header, row));

		for (const parsedProduct of parsedProducts) {

			if (!_get(parsedProduct, 'Product') ||  !_get(parsedProduct, 'Model')) {
				continue;
			}

			const product = await this.productModel.create({
				name: _get(parsedProduct, 'Product'),
				partNumber: _get(parsedProduct, 'Model'),
			});

			const specs: any = {};

			for (const [key, value] of Object.entries(parsedProduct)) {

				const productComponentTypeName = await this.productComponentTypeNamesService.findOne({
					attributes: ['id'],
					where: {
						name: _toLower(key)
					},
					include: [
						ProductComponentType
					]
				});

				if (!productComponentTypeName?.productComponentType?.key) {
					continue;
				}

				specs[productComponentTypeName.productComponentType.key] = value;

			}

			product.specs = specs;
			await product.save();

		}

	}

}
