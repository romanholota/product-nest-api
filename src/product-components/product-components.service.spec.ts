import { Test, TestingModule } from '@nestjs/testing';
import { ProductComponentsService } from './product-components.service';

describe('ProductComponentsService', () => {
  let service: ProductComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductComponentsService],
    }).compile();

    service = module.get<ProductComponentsService>(ProductComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
