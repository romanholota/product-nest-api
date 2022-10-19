import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComponentAttribute } from './component-attribute.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ComponentAttributesService {

	constructor(
		@InjectModel(ComponentAttribute)
		private componentAttributeModel: typeof ComponentAttribute
	) {
	}

	findAll(query?: FindOptions) {
		return this.componentAttributeModel.findAll(query);
	}

	create(data: any) {
		return this.componentAttributeModel.create(data);
	}

}
