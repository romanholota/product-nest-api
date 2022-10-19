import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ComponentAttributesService } from './component-attributes.service';

@Controller('component-attributes')
export class ComponentAttributesController {

	constructor(
		private componentAttributesService: ComponentAttributesService
	) {
	}

	@Get('index')
	findAll(@Query('componentId') componentId: string) {
		return this.componentAttributesService.findAll({
			where: {
				componentId: componentId
			}
		});
	}

	@Post('create')
	create(@Body() data: any) {
		return this.componentAttributesService.create(data);
	}


}
