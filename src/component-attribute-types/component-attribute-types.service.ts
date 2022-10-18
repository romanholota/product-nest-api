import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComponentAttributeType } from './component-attribute-type.model';

@Injectable()
export class ComponentAttributeTypesService {

	constructor(
		@InjectModel(ComponentAttributeType)
		private componentAttributeTypeModel: typeof ComponentAttributeType
	) {
	}

}
