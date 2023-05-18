import { Test, TestingModule } from '@nestjs/testing';
import { GiftAssignmentService } from './gift-assignment.service';

describe('GiftAssignmentService', () => {
  let service: GiftAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftAssignmentService],
    }).compile();

    service = module.get<GiftAssignmentService>(GiftAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
