import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComponentType } from './component-type.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ComponentTypesService {

    constructor(
        @InjectModel(ComponentType)
        private componentTypeModel: typeof ComponentType
    ) {}

    findAll(query?: FindOptions) {
        return this.componentTypeModel.findAll(query);
    }

    create(data: any) {
        return this.componentTypeModel.create(data);
    }


}
