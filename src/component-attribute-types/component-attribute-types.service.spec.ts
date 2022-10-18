import { Test, TestingModule } from '@nestjs/testing';
import { ComponentAttributeTypesService } from './component-attribute-types.service';

describe('ComponentAttributeTypesService', () => {
  let service: ComponentAttributeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentAttributeTypesService],
    }).compile();

    service = module.get<ComponentAttributeTypesService>(ComponentAttributeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
