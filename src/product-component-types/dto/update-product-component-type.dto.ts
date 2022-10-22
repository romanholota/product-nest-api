import { PartialType } from '@nestjs/mapped-types';
import { CreateProductComponentTypeDto } from './create-product-component-type.dto';

export class UpdateProductComponentTypeDto extends PartialType(CreateProductComponentTypeDto) {}
