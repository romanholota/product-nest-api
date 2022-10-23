import { Controller, Get } from '@nestjs/common';
import { ProductComponentTypesService } from './product-component-types.service';

@Controller('product-component-types')
export class ProductComponentTypesController {
  constructor(private readonly productComponentTypesService: ProductComponentTypesService) {}

  @Get('index')
  findAll() {
    return this.productComponentTypesService.findAll();
  }

}
