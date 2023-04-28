import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGiftRequestDto } from './dto/create-gift-request.dto';
import { UpdateGiftRequestDto } from './dto/update-gift-request.dto';
import { GiftRequest, GiftRequestDocument } from './schema/gift-request.schema';
 //from '/gift/schema/gift.schema';


@Injectable()
export class GiftRequestService {
    constructor(@InjectModel(GiftRequest.name) private readonly model: Model<GiftRequestDocument>) {}

    async findAll(): Promise<GiftRequest[]> {
        return await this.model.find().exec();
      }
    
      async findByWalletAddress(walletAddress: string): Promise<GiftRequest> {
        return await this.model.findOne({walletAddress}).exec();
      }

      async findByWalletAndContract(walletAddress: string, contractAddress: string): Promise<GiftRequest[]> {
        return await this.model.find({walletAddress, contractAddress}).exec();
      }

      async findByWalletAndContractAndTokenID(walletAddress: string, contractAddress: string, tokenID: string): Promise<GiftRequest[]> {
        return await this.model.find({walletAddress, contractAddress, tokenID}).exec();
      }


      async findByContractAndTokenID(contractAddress: string, tokenID: string): Promise<GiftRequest[]> {
        return await this.model.find({contractAddress, tokenID}).exec();
      }


      async findByContractAddress(contractAddress: string): Promise<GiftRequest[]> {
        return await this.model.find({contractAddress}).exec();
      }

      async findByContractName(contractName: string): Promise<GiftRequest[]> {
        return await this.model.find({contractName}).exec();
      }

      async findByName(name: string): Promise<GiftRequest[]> {
        return await this.model.find({name}).exec();
      }

      async findByPhone(phone: string): Promise<GiftRequest[]> {
        return await this.model.find({phone}).exec();
      }
      
      async create(createGiftRequestDto: CreateGiftRequestDto): Promise<GiftRequest> {
        return await new this.model({
          ...createGiftRequestDto,
          createdAt: new Date(),
        }).save();
      }

      async update(id: string, updateGiftRequestDto: UpdateGiftRequestDto): Promise<GiftRequest> {
        return await this.model.findByIdAndUpdate(id, updateGiftRequestDto).exec();
      }
    
}