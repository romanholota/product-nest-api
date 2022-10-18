import { Test, TestingModule } from '@nestjs/testing';
import { ComponentAttributesController } from './component-attributes.controller';

describe('ComponentAttributesController', () => {
  let controller: ComponentAttributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentAttributesController],
    }).compile();

    controller = module.get<ComponentAttributesController>(ComponentAttributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
