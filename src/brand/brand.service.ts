import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import axios from "axios";

@Injectable()
export class BrandService {

    constructor(
        @InjectRepository(Brand)
        private brandRepository: Repository<Brand>
      ) { }
    
      public async create(createBrandDto: CreateBrandDto) {
        const brand = await this.brandRepository.create(createBrandDto);
        await this.brandRepository.save(brand);
        return brand;
      }
    
      async getListLoyaltyBrand(token: string) {
    
        let url = `${process.env.LOYALTY_API}/brandStaff/invited?size=30&page=0&keyword=`;

        let rst = null;
    
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        await axios.get(url).then(function (response) {
          rst = response.data;
        }).catch((response) => {
          console.log(response);
        });
    
        rst.data.forEach(async element => {
          let brandDto: CreateBrandDto = { ...element };
          const brand = await this.findOneByBrandIdAndbrandStaffId(brandDto.brandId, brandDto.brandStaffId);
          if (brand) {
            this.update(brand.id, brandDto);
          } else {
            this.create(brandDto);
          }
          console.log(brandDto);
        });
        return rst;
    
      }
    
      async findOneByBrandIdAndbrandStaffId(brandId: string, brandStaffId: string) {
        const voucher = await this.brandRepository.findOneBy({ brandId: brandId, brandStaffId: brandStaffId });
        return voucher;
      }

      async update(
        id,
        brandDto: CreateBrandDto,
      ) {
    
        return await this.brandRepository.update({
          id
        },
          {
            brandName: brandDto.brandName,
            brandId: brandDto.brandId,
            brandStaffId: brandDto.brandStaffId,
            userId: brandDto.userId,
            roleName: brandDto.roleName    
          }
        );
      }


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