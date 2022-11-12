import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	Query,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Op, Sequelize } from 'sequelize';
import { toLower as _toLower } from 'lodash';
import { ProductCategory } from '../product-categories/product-category.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class ProductsController {

	constructor(
		private productsService: ProductsService
	) {
	}

	@Get('index/:categorySlug')
	findAll(@Query('search') search: string, @Param('categorySlug') categorySlug: string) {
		return this.productsService.findAll({
			where: {
				[Op.or]: [
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('Product.name')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					),
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('Product.partNumber')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					)
				]
			},
			include: [
				{
					model: ProductCategory,
					where: {
						name: categorySlug
					}
				}
			],
			limit: 20
		});
	}

	@UseGuards(JwtAuthGuard)
	@Get('admin/index')
	findAllAdmin(@Query('search') search: string) {
		return this.productsService.findAll({
			where: {
				[Op.or]: [
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('Product.name')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					),
					Sequelize.where(
						Sequelize.fn('lower', Sequelize.col('Product.partNumber')),
						{
							[Op.like]: `%${_toLower(search)}%`
						}
					)
				]
			},
			limit: 20
		});
	}

	@Get('detail/:id')
	findOne(@Param('id') id: string) {
		return this.productsService.findOne({
			where: {
				id: id
			}
		});
	}

	@UseGuards(JwtAuthGuard)
	@Get('admin/update/:id')
	findOneAdmin(@Param('id') id: string) {
		return this.productsService.findOne({
			where: {
				id: id
			}
		});
	}

	@UseGuards(JwtAuthGuard)
	@Put('admin/update/:id')
	updateAdmin(@Param('id') id: string, @Body() body: any) {

		return this.productsService.update(
			body,
			{
				where: {
					id: id
				}
			}
		);
	}

	@Post('upload/xlsx/:categoryId')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File, @Param('categoryId') categoryId: string) {
		return this.productsService.parseXlsx(file, +categoryId);
	}


}
