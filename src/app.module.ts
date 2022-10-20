import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductComponentsModule } from './product-components/product-components.module';
import { ComponentsModule } from './components/components.module';
import { ComponentAttributesModule } from './component-attributes/component-attributes.module';
import { ComponentAttributeTypesModule } from './component-attribute-types/component-attribute-types.module';
import { ComponentTypesModule } from './component-types/component-types.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComponentAttribute } from './component-attributes/component-attribute.model';
import { ComponentAttributeType } from './component-attribute-types/component-attribute-type.model';
import { ComponentType } from './component-types/component-type.model';
import { Component } from './components/component.model';
import { ProductComponent } from './product-components/product-component.model';
import { Product } from './products/product.model';
import { ItemsModule } from './items/items.module';
import { Item } from './items/item.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				dialect: 'postgres',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USER'),
				password: configService.get('DB_PASS'),
				database: configService.get('DB_NAME'),
				autoLoadModels: true,
				synchronize: true,
				models: [ComponentAttributeType, ComponentAttribute, ComponentType, Component, ProductComponent, Product, Item],
			})
		}),
		ProductsModule,
		ProductComponentsModule,
		ComponentsModule,
		ComponentAttributesModule,
		ComponentAttributeTypesModule,
		ComponentTypesModule,
		ItemsModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
