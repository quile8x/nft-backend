import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, BrandDocument } from './schema/brand.schema';

@Injectable()
export class BrandService {

    // constructor(@InjectModel(Brand.name) private readonly model: Model<BrandDocument>) {}
    
    // async findAll(): Promise<Brand[]> {
    //     return await this.model.find().exec();
    //   }
    
    //   async findByWalletAddress(walletAddress: string): Promise<Brand> {
    //     //console.log("----------",walletAddress);
    //     return await this.model.findOne({"walletAddress": {$regex : walletAddress, "$options": "i" }}).exec();
    //   }

    //   async findByContractAddress(contractAddress: string): Promise<Brand[]> {
    //     return await this.model.find({contractAddress}).exec();
    //   }

    //   async findByContractName(contractName: string): Promise<Brand[]> {
    //     return await this.model.find({contractName}).exec();
    //   }

    //   async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    //     return await new this.model({
    //       ...createBrandDto,
    //       createdAt: new Date(),
    //     }).save();
    //   }

    //   async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    //     return await this.model.findByIdAndUpdate(id, updateBrandDto).exec();
    //   }
    
}