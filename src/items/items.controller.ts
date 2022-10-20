import { Controller, Delete, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Op, Sequelize } from 'sequelize';
import { toLower as _toLower } from 'lodash';

@Controller('items')
export class ItemsController {

	constructor(private readonly itemsService: ItemsService) {}

	@Get('index')
	findAll(@Query('search') search: string) {
		return this.itemsService.findAll({
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

	@Delete('destroy')
	destroyAll() {
		return this.itemsService.destroy();
	}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		return this.itemsService.parseXls(file);
	}

}
