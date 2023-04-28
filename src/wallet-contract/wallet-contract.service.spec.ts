import { Test, TestingModule } from '@nestjs/testing';
import { WalletContractService } from './wallet-contract.service';

describe('WalletContractService', () => {
  let service: WalletContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletContractService],
    }).compile();

    service = module.get<WalletContractService>(WalletContractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
