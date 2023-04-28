import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGiftNftDto } from './dto/create-gift-nft.dto';
import { UpdateGiftNftDto } from './dto/update-gift-nft.dto';
import { GiftNft, GiftNftDocument } from './schema/gift-nft.schema';


@Injectable()
export class GifNftService {
    constructor(@InjectModel(GiftNft.name) private readonly model: Model<GiftNftDocument>) {}
    async findAll(): Promise<GiftNft[]> {
        return await this.model.find().exec();
      }
    
      async findByWalletAddress(walletAddress: string): Promise<GiftNft[]> {
        return await this.model.find({walletAddress}).exec();
      }

      async findByIsNotClaim(isClaim: boolean): Promise<GiftNft[]> {
        return await this.model.find({isClaim}).exec();
      }

      async create(createGiftNftDto: CreateGiftNftDto): Promise<GiftNft> {
        return await new this.model({
          ...createGiftNftDto,
          createdAt: new Date(),
        }).save();
      }

      async update(id: string, updateGiftNftDto: UpdateGiftNftDto): Promise<GiftNft> {
        return await this.model.findByIdAndUpdate(id, updateGiftNftDto).exec();
      }
    
}