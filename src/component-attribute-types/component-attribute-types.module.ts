import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import { ComponentAttributeType } from './component-attribute-type.model';
import { ComponentAttributeTypesService } from './component-attribute-types.service';
import { ComponentAttributeTypesController } from './component-attribute-types.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([ComponentAttributeType])
    ],
    providers: [ComponentAttributeTypesService],
    controllers: [ComponentAttributeTypesController]
})
export class ComponentAttributeTypesModule {}
