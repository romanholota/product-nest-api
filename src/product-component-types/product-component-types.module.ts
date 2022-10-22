import { Module } from '@nestjs/common';
import { ProductComponentTypesService } from './product-component-types.service';
import { ProductComponentTypesController } from './product-component-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComponentType } from './product-component-type.model';
import { ProductComponentTypeNamesModule } from '../product-component-type-names/product-component-type-names.module';

@Module({
  imports: [
      SequelizeModule.forFeature([ProductComponentType]),
      ProductComponentTypeNamesModule
  ],
  controllers: [ProductComponentTypesController],
  providers: [ProductComponentTypesService]
})
export class ProductComponentTypesModule {}
