import { Test, TestingModule } from '@nestjs/testing';
import { GiftFormService } from './gift-form.service';

describe('GiftFormService', () => {
  let service: GiftFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftFormService],
    }).compile();

    service = module.get<GiftFormService>(GiftFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
