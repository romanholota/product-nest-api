import { Test, TestingModule } from '@nestjs/testing';
import { ComponentAttributesService } from './component-attributes.service';

describe('ComponentAttributesService', () => {
  let service: ComponentAttributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentAttributesService],
    }).compile();

    service = module.get<ComponentAttributesService>(ComponentAttributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
