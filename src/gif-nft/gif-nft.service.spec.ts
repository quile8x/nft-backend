import { Test, TestingModule } from '@nestjs/testing';
import { GifNftService } from './gif-nft.service';

describe('GifNftService', () => {
  let service: GifNftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GifNftService],
    }).compile();

    service = module.get<GifNftService>(GifNftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
