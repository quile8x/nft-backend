import { Test, TestingModule } from '@nestjs/testing';
import { WalletContractController } from './wallet-contract.controller';

describe('WalletContractController', () => {
  let controller: WalletContractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletContractController],
    }).compile();

    controller = module.get<WalletContractController>(WalletContractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
