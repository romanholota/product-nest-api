import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductComponent } from './product-component.model';
import { toLower as _toLower } from 'lodash';
import { ProductComponentTypeNamesService } from '../product-component-type-names/product-component-type-names.service';
import { ProductComponentType } from '../product-component-types/product-component-type.model';

@Injectable()
export class ProductComponentsService {

	constructor(
		@InjectModel(ProductComponent)
		private productComponentModel: typeof ProductComponent,
		private productComponentTypeNamesService: ProductComponentTypeNamesService
	) {
	}

	async create(productId: number, key: string, value: any) {

		const productComponentTypeName = await this.productComponentTypeNamesService.findOne({
			attributes: ['productComponentTypeId'],
			where: {
				name: _toLower(key)
			},
			include: [
				ProductComponentType
			]
		});

		if (!productComponentTypeName?.productComponentType?.name) {
			return;
		}

		return this.productComponentModel.create({
			productId: productId,
			name: productComponentTypeName.productComponentType.name,
			value: value
		});

	}

}
