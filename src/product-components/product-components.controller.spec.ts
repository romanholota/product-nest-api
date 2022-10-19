import { Test, TestingModule } from '@nestjs/testing';
import { ProductComponentsController } from './product-components.controller';

describe('ProductComponentsController', () => {
  let controller: ProductComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductComponentsController],
    }).compile();

    controller = module.get<ProductComponentsController>(ProductComponentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
