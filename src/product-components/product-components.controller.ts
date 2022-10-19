import { Body, Controller, Post } from '@nestjs/common';
import { ProductComponentsService } from './product-components.service';

@Controller('product-components')
export class ProductComponentsController {

	constructor(
		private productComponentsService: ProductComponentsService
	) {
	}

	@Post('create')
	create(@Body() data: any) {
		return this.productComponentsService.create(data);
	}

}
