import { Test, TestingModule } from '@nestjs/testing';
import { GiftClaimController } from './gift-claim.controller';
import { GiftClaimService } from './gift-claim.service';

describe('GiftClaimController', () => {
  let controller: GiftClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftClaimController],
      providers: [GiftClaimService],
    }).compile();

    controller = module.get<GiftClaimController>(GiftClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
