import { Injectable } from '@nestjs/common';
import { CreateProductComponentTypeDto } from './dto/create-product-component-type.dto';
import { UpdateProductComponentTypeDto } from './dto/update-product-component-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductComponentType } from './product-component-type.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ProductComponentTypesService {

  constructor(
      @InjectModel(ProductComponentType)
      private productComponentTypeModel: typeof ProductComponentType
  ) {
  }

  findAll(query?: FindOptions) {
    return this.productComponentTypeModel.findAll(query);
  }

}
