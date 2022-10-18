import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductComponent } from './product-component.model';

@Module({
    imports: [
        SequelizeModule.forFeature([ProductComponent])
    ]
})
export class ProductComponentsModule {}
