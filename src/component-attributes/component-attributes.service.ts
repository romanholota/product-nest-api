import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComponentAttribute } from './component-attribute.model';

@Injectable()
export class ComponentAttributesService {

	constructor(
		@InjectModel(ComponentAttribute)
		private componentAttributeModel: typeof ComponentAttribute
	) {
	}

}
