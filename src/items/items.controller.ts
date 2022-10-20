import { Controller, Delete, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Op } from 'sequelize';

@Controller('items')
export class ItemsController {

	constructor(private readonly itemsService: ItemsService) {}

	@Get('index')
	findAll(@Query('search') search: string) {
		return this.itemsService.findAll({
			where: {
				[Op.or]: [
					{
						name: {
							[Op.iLike]: `%${search || ''}%`
						}
					},
					{
						partNumber: {
							[Op.iLike]: `%${search || ''}%`
						}
					}

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
