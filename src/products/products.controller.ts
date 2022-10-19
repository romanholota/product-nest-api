import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductComponent } from '../product-components/product-component.model';
import { Component } from '../components/component.model';
import { ComponentAttribute } from '../component-attributes/component-attribute.model';
import { ComponentAttributeType } from '../component-attribute-types/component-attribute-type.model';
import { ComponentType } from '../component-types/component-type.model';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {

	constructor(
		private productsService: ProductsService
	) {
	}

	@Get('index')
	findAll() {
		return this.productsService.findAll();
	}

	@Post('create')
	create(@Body() data: any) {
		return this.productsService.create(data);
	}

	@Get('edit/:id')
	edit(@Param('id') id: string) {
		return this.productsService.findOne({
			where: {
				id: id
			},
			include: [
				{
					model: ProductComponent,
					include: [
						{
							model: Component,
							include: [
								{
									model: ComponentAttribute,
									include: [
										ComponentAttributeType
									]
								},
								ComponentType
							]
						}
					]
				}
			]
		});
	}


}
