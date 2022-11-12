import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { FindOptions, UpdateOptions } from 'sequelize';
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

	async parseXlsx(file, categoryId: number) {
		const sheet: any = xlsx.parse(file.buffer)[0]['data'];
		const header = sheet[0];
		const componentNameMap = {};
		const data = sheet.splice(1);

		for (const key of header) {

			const productComponentTypeName = await this.productComponentTypeNamesService.findOne({
				attributes: ['id'],
				where: {
					name: _toLower(key)
				},
				include: [
					{
						model: ProductComponentType,
						attributes: ['key'],
						where: {
							productCategoryId: categoryId
						}
					}
				]
			});

			if (!productComponentTypeName?.productComponentType?.key) {
				continue;
			}

			componentNameMap[key] = productComponentTypeName.productComponentType.key;

		}

		const parsedProducts = _map(data, row => _zipObject(header, row));

		for (const parsedProduct of parsedProducts) {

			if (!_get(parsedProduct, 'Product') ||  !_get(parsedProduct, 'Model')) {
				continue;
			}

			const [product, created] = await this.productModel.findOrCreate({
				where: {
					partNumber: _get(parsedProduct, 'Model'),
				},
				defaults: {
					name: _get(parsedProduct, 'Product'),
					productCategoryId: categoryId
				}
			});

			if (!created) {
				continue;
			}

			const specs: any = {};

			for (const [key, value] of Object.entries(parsedProduct)) {

				if (componentNameMap[key]) specs[componentNameMap[key]] = value;

			}

			product.specs = specs;
			await product.save();

		}

	}

	update(values: any, options: UpdateOptions) {
		return this.productModel.update(values, options);
	}
}
