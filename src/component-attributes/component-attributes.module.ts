import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComponentAttribute } from './component-attribute.model';
import { ComponentAttributesService } from './component-attributes.service';
import { ComponentAttributesController } from './component-attributes.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([ComponentAttribute])
    ],
    providers: [ComponentAttributesService],
    controllers: [ComponentAttributesController]
})
export class ComponentAttributesModule {}
