import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {

	constructor(
		private componentsService: ComponentsService
	) {
	}

	@Get('index')
	findAll(@Query('componentTypeId') componentTypeId: string) {
		return this.componentsService.findAll({
			where: {
				componentTypeId: componentTypeId
			}
		})
	}

	@Post('create')
	create(@Body() data: any) {
		return this.componentsService.create(data);
	}

}
