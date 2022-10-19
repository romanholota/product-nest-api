import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductComponent } from './product-component.model';
import { ComponentsService } from '../components/components.service';

@Injectable()
export class ProductComponentsService {

	constructor(
		@InjectModel(ProductComponent)
		private productComponentModel: typeof ProductComponent,
		private componentsService: ComponentsService
	) {
	}

	async create(data: any) {

		if (!data?.componentId) {
			const component = await this.componentsService.create({name: 'Nový komponent'});
			data.componentId = component.id;
		}

		return this.productComponentModel.create(data);

	}

}
