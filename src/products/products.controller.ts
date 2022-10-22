import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Op, Sequelize } from 'sequelize';
import { toLower as _toLower } from 'lodash';

@Controller('products')
export class ProductsController {

	constructor(
		private productsService: ProductsService
	) {
	}

	@Get('index')
	findAll(@Query('search') search: string) {
		return this.productsService.findAll({
			where: {
				[Op.or]: [
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('name')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					),
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('partNumber')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					)
				]
			},
			limit: 20
		});
	}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		return this.productsService.parseXls(file);
	}


}
