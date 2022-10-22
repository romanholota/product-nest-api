import { Test, TestingModule } from '@nestjs/testing';
import { ProductComponentTypeNamesService } from './product-component-type-names.service';

describe('ProductComponentTypeNamesService', () => {
  let service: ProductComponentTypeNamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductComponentTypeNamesService],
    }).compile();

    service = module.get<ProductComponentTypeNamesService>(ProductComponentTypeNamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
