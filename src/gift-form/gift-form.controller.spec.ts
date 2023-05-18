import { Test, TestingModule } from '@nestjs/testing';
import { GiftFormController } from './gift-form.controller';
import { GiftFormService } from './gift-form.service';

describe('GiftFormController', () => {
  let controller: GiftFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftFormController],
      providers: [GiftFormService],
    }).compile();

    controller = module.get<GiftFormController>(GiftFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
