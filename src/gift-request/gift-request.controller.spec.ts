import { Test, TestingModule } from '@nestjs/testing';
import { GiftRequestController } from './gift-request.controller';

describe('GiftRequestController', () => {
  let controller: GiftRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftRequestController],
    }).compile();

    controller = module.get<GiftRequestController>(GiftRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
