import { Controller, Get, Body, Post } from '@nestjs/common';
import { ComponentTypesService } from './component-types.service';

@Controller('component-types')
export class ComponentTypesController {

	constructor(
		private componentTypesService: ComponentTypesService
	) {
	}

	@Get('index')
	findAll() {
		return this.componentTypesService.findAll();
	}

	@Post('create')
	create(@Body() data: any) {
		return this.componentTypesService.create(data);
	}

}
