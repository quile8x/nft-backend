import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { Gift, GiftDocument } from './schema/gift.schema';


@Injectable()
export class GiftService {
    constructor(@InjectModel(Gift.name) private readonly model: Model<GiftDocument>) {}


    async findOne(ID: string): Promise<Gift> {
      return await this.model.findOne ({ "_id": ID }).exec();
    }
    
    async findAll(): Promise<Gift[]> {
        return await this.model.find().exec();
      }
    
      async findByWalletAddress(walletAddress: string): Promise<Gift[]> {
        console.log("----------",walletAddress)
        return await this.model.find({walletAddress}).exec();
      }

      async findByContractAddress(contractAddress: string): Promise<Gift[]> {
        return await this.model.find({ "contracts.address": contractAddress}).exec();
        //return await this.model.find({contractAddress}).exec();
      }

      async findByContractName(contractName: string): Promise<Gift[]> {
        return await this.model.find({contractName}).exec();
      }

      async findByIsNotClaim(isClaim: boolean): Promise<Gift[]> {
        return await this.model.find({isClaim}).exec();
      }

      async create(createGiftDto: CreateGiftDto): Promise<Gift> {
        //Logger.log("createGiftDto===============", createGiftDto);
        return await new this.model({
          ...createGiftDto,
          createdAt: new Date(),
        }).save();
      }

      async update(id: string, updateGiftDto: UpdateGiftDto): Promise<Gift> {
        //Logger.log("xxxx==x=============", updateGiftDto);
        return await this.model.findByIdAndUpdate(id, updateGiftDto).exec();
      }
    
}