import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletContractDto } from './dto/create-wallet-contract.dto';
import { WalletContract, WalletContractDocument } from './schema/wallet-contract.schema';

@Injectable()
export class WalletContractService {
    constructor(@InjectModel(WalletContract.name) private readonly model: Model<WalletContractDocument>) {}
    async findAll(): Promise<WalletContract[]> {
        return await this.model.find().exec();
      }
    
      async findByWalletAddress(walletAddress: string): Promise<WalletContract[]> {
        return await this.model.find({walletAddress}).exec();
      }
    
      async create(createWalletContract: CreateWalletContractDto): Promise<WalletContract> {
        return await new this.model({
          ...createWalletContract,
          createdAt: new Date(),
        }).save();
      }
}