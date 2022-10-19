import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Component } from './component.model';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([Component])
    ],
    providers: [ComponentsService],
    controllers: [ComponentsController],
    exports: [ComponentsService]
})
export class ComponentsModule {}
