import { Test, TestingModule } from '@nestjs/testing';
import { GiftRequestService } from './gift-request.service';

describe('GiftRequestService', () => {
  let service: GiftRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftRequestService],
    }).compile();

    service = module.get<GiftRequestService>(GiftRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
