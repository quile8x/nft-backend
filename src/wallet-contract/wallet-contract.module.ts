import { Module } from '@nestjs/common';
import { WalletContractService } from './wallet-contract.service';
import { WalletContractController } from './wallet-contract.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletContract, WalletContractSchema } from './schema/wallet-contract.schema';

@Module({
  providers: [WalletContractService],
  controllers: [WalletContractController],
  imports: [
    MongooseModule.forFeature([{ name: WalletContract.name, schema: WalletContractSchema }]),
  ],
})
export class WalletContractModule {}




