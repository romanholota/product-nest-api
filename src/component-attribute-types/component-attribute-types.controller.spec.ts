import { Test, TestingModule } from '@nestjs/testing';
import { ComponentAttributeTypesController } from './component-attribute-types.controller';

describe('ComponentAttributeTypesController', () => {
  let controller: ComponentAttributeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentAttributeTypesController],
    }).compile();

    controller = module.get<ComponentAttributeTypesController>(ComponentAttributeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
