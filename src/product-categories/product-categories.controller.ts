
import { Controller, Get } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';

@Controller()
export class ProductCategoriesController {
  constructor(private readonly productCategoriesService: ProductCategoriesService) {
  }

  @Get('index')
  findAll() {
    return this.productCategoriesService.findAll();
  }

}
