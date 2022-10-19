import { Body, Controller, Post } from '@nestjs/common';
import { ComponentAttributeTypesService } from './component-attribute-types.service';

@Controller('component-attribute-types')
export class ComponentAttributeTypesController {

	constructor(
		private componentAttributeTypesService: ComponentAttributeTypesService
	) {
	}

	@Post('create')
	create(@Body() data: any) {
		return this.componentAttributeTypesService.create(data);
	}

}
