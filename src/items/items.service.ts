import { Injectable } from '@nestjs/common';
import * as xlsx from 'node-xlsx';
import { map as _map, zipObject as _zipObject, get as _get } from 'lodash';
import { Item } from './item.model';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize';

@Injectable()
export class ItemsService {

	constructor(
		@InjectModel(Item)
		private itemModel: typeof Item
	) {
	}

	findAll(query?: FindOptions) {
		return this.itemModel.findAll(query);
	}

	destroy() {
		return this.itemModel.destroy({truncate: true});
	}

	async parseXls(file) {
		const sheet: any = xlsx.parse(file.buffer)[0]['data'];
		const header = sheet[0];
		const data = sheet.splice(1);
		const parsedProducts = _map(data, row => _zipObject(header, row));

		for (const parsedProduct of parsedProducts) {
			await this.itemModel.create({
				name: _get(parsedProduct, 'Product'),
				partNumber: _get(parsedProduct, 'Model'),
				specs: parsedProduct
			});
		}

	}

}
