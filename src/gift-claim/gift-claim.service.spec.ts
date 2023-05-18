import { Test, TestingModule } from '@nestjs/testing';
import { GiftClaimService } from './gift-claim.service';

describe('GiftClaimService', () => {
  let service: GiftClaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftClaimService],
    }).compile();

    service = module.get<GiftClaimService>(GiftClaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
