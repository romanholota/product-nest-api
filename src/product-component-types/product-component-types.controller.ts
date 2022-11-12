import { Controller, Get, Param } from '@nestjs/common';
import { ProductComponentTypesService } from './product-component-types.service';
import { ProductCategory } from '../product-categories/product-category.model';

@Controller()
export class ProductComponentTypesController {
  constructor(private readonly productComponentTypesService: ProductComponentTypesService) {}

  @Get('index/:categorySlug')
  findAll(@Param('categorySlug') categorySlug: string) {
    return this.productComponentTypesService.findAll({
      include: [
        {
          model: ProductCategory,
          where: {
            name: categorySlug
          }
        }
      ]
    });
  }

  @Get('admin/index/:categoryId')
  findAllAdmin(@Param('categoryId') categoryId: string) {
    return this.productComponentTypesService.findAll({
      include: [
        {
          model: ProductCategory,
          where: {
            id: categoryId
          }
        }
      ]
    });
  }

}
