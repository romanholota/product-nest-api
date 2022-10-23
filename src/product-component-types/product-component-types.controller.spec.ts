import { Test, TestingModule } from '@nestjs/testing';
import { ProductComponentTypesController } from './product-component-types.controller';
import { ProductComponentTypesService } from './product-component-types.service';

describe('ProductComponentTypesController', () => {
  let controller: ProductComponentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductComponentTypesController],
      providers: [ProductComponentTypesService],
    }).compile();

    controller = module.get<ProductComponentTypesController>(ProductComponentTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
