import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComponent } from './product-component.model';
import { ProductComponentsController } from './product-components.controller';
import { ProductComponentsService } from './product-components.service';
import { ProductComponentTypeNamesModule } from '../product-component-type-names/product-component-type-names.module';

@Module({
    imports: [
        SequelizeModule.forFeature([ProductComponent]),
        ProductComponentTypeNamesModule
    ],
    controllers: [ProductComponentsController],
    providers: [ProductComponentsService],
    exports: [ProductComponentsService]
})
export class ProductComponentsModule {}
