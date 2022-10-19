import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComponentAttributeType } from './component-attribute-type.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ComponentAttributeTypesService {

	constructor(
		@InjectModel(ComponentAttributeType)
		private componentAttributeTypeModel: typeof ComponentAttributeType
	) {
	}

	findAll(query?: FindOptions) {
		return this.componentAttributeTypeModel.findAll(query);
	}

	create(data: any) {
		return this.componentAttributeTypeModel.create(data);
	}

}
