import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductComponentsModule } from '../product-components/product-components.module';
import { ProductComponentTypeNamesModule } from '../product-component-type-names/product-component-type-names.module';

@Module({
    imports: [
        SequelizeModule.forFeature([Product]),
        ProductComponentsModule,
        ProductComponentTypeNamesModule
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
