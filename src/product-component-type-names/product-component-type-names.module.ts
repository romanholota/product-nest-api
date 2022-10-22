import { Module } from '@nestjs/common';
import { ProductComponentTypeNamesService } from './product-component-type-names.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComponentTypeName } from './product-component-type-name.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductComponentTypeName])],
  providers: [ProductComponentTypeNamesService],
  exports: [ProductComponentTypeNamesService]
})
export class ProductComponentTypeNamesModule {}
