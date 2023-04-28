import { Test, TestingModule } from '@nestjs/testing';
import { GifNftController } from './gif-nft.controller';

describe('GifNftController', () => {
  let controller: GifNftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GifNftController],
    }).compile();

    controller = module.get<GifNftController>(GifNftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
