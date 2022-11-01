import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products/product.model';
import { ItemsModule } from './items/items.module';
import { Item } from './items/item.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductComponentTypesModule } from './product-component-types/product-component-types.module';
import { ProductComponentTypeNamesModule } from './product-component-type-names/product-component-type-names.module';
import { ProductComponentType } from './product-component-types/product-component-type.model';
import { ProductComponentTypeName } from './product-component-type-names/product-component-type-name.model';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { ProductCategory } from './product-categories/product-category.model';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				dialect: 'mysql',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USER'),
				password: configService.get('DB_PASS'),
				database: configService.get('DB_NAME'),
				autoLoadModels: true,
				sync: {
					alter: true
				},
				models: [Product, Item, ProductComponentType, ProductComponentTypeName, ProductCategory],
			})
		}),
		ProductsModule,
		ItemsModule,
		ProductComponentTypesModule,
		ProductComponentTypeNamesModule,
		ProductCategoriesModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
