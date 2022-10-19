import { Injectable } from '@nestjs/common';
import * as xlsx from 'node-xlsx';
import { map as _map, zipObject as _zipObject } from 'lodash';
import { Item } from './item.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ItemsService {

	constructor(
		@InjectModel(Item)
		private itemModel: typeof Item
	) {
	}

	async parseXls(file) {
		const sheet: any = xlsx.parse(file.buffer)[0]['data'];
		const header = sheet[0];
		const data = sheet.splice(1);
		const parsedProducts = _map(data, row => _zipObject(header, row));

		for (const parsedProduct of parsedProducts) {
			await this.itemModel.create({
				specs: JSON.stringify(parsedProduct)
			});
		}

	}

}
