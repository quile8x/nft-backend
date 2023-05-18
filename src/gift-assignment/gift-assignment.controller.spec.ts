import { Test, TestingModule } from '@nestjs/testing';
import { GiftAssignmentController } from './gift-assignment.controller';
import { GiftAssignmentService } from './gift-assignment.service';

describe('GiftAssignmentController', () => {
  let controller: GiftAssignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftAssignmentController],
      providers: [GiftAssignmentService],
    }).compile();

    controller = module.get<GiftAssignmentController>(GiftAssignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
