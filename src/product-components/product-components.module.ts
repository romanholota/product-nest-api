import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComponent } from './product-component.model';
import { ProductComponentsController } from './product-components.controller';
import { ProductComponentsService } from './product-components.service';
import { ComponentsModule } from '../components/components.module';

@Module({
    imports: [
        SequelizeModule.forFeature([ProductComponent]),
        ComponentsModule
    ],
    controllers: [ProductComponentsController],
    providers: [ProductComponentsService]
})
export class ProductComponentsModule {}
