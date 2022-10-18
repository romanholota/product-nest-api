import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComponentType } from './component-type.model';
import { ComponentTypesService } from './component-types.service';
import { ComponentTypesController } from './component-types.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([ComponentType])
    ],
    providers: [ComponentTypesService],
    controllers: [ComponentTypesController]
})
export class ComponentTypesModule {}
