import { Injectable } from '@nestjs/common';
import { CreateProductComponentTypeDto } from './dto/create-product-component-type.dto';
import { UpdateProductComponentTypeDto } from './dto/update-product-component-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductComponentType } from './product-component-type.model';

@Injectable()
export class ProductComponentTypesService {

  constructor(
      @InjectModel(ProductComponentType)
      private productComponentTypeModel: typeof ProductComponentType
  ) {
  }

  findAll() {
    return this.productComponentTypeModel.findAll();
  }

}
