import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Component } from './component.model';
import { FindOptions } from 'sequelize';

@Injectable()
export class ComponentsService {

	constructor(
		@InjectModel(Component)
		private componentModel: typeof Component
	) {
	}

	findAll(query?: FindOptions) {
		return this.componentModel.findAll(query);
	}

	create(data: any) {
		return this.componentModel.create(data);
	}

}
