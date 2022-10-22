import { Test, TestingModule } from '@nestjs/testing';
import { ProductComponentTypesService } from './product-component-types.service';

describe('ProductComponentTypesService', () => {
  let service: ProductComponentTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductComponentTypesService],
    }).compile();

    service = module.get<ProductComponentTypesService>(ProductComponentTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
