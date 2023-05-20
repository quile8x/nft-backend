import { HttpException, HttpStatus, Injectable, Logger, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService, HttpModule } from "@nestjs/axios";
import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { catchError, firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';


import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { Voucher } from './entities/voucher.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';


@Injectable()
export class VoucherService {

  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>
  ) { }

  public async create(voucherData: CreateVoucherDto) {
    const voucher = await this.voucherRepository.create(voucherData);
    await this.voucherRepository.save(voucher);
    return voucher;
  }


  async getListLoyaltyVourcher(token: string) {

    let url = `${process.env.LOYALTY_API}/voucher/mylist?keyword=&page=0&size=10&pricingType=1&orderField=voucherName&order=ASC&statuses=0,2&uvrstatuses=1,0&vbstatuses=0,1`;
    // const options = {
    //   headers: { "content-type": "application/json" }
    // }
    let rst = null;

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.get(url).then(function (response) {
      rst = response.data;

      // const { user, token, refreshToken } = rst;
      // userObj = { ...user };
      // userObj.loyaltyRefreshToken = refreshToken;
      // userObj.loyaltyToken = token;
      // userObj.walletAddress = user.walletAddress;
      // console.log(rst);
    }).catch((response) => {
      console.log(response);
    });


    rst.data.forEach(async element => {
      let voucherDto: CreateVoucherDto = {...element};
      const voucher = await this.findOneByNftBlockIdAndVoucherContractAddress(voucherDto.nftBlockId, voucherDto.voucherContractAddress);
      if (voucher) {
        this.update(voucher.id, voucherDto);
      } else {
        this.create(voucherDto);
      }
      console.log(voucherDto);
    });
    return rst;

  }

  findAll() {
    return `This action returns all voucher`;
  }

  async findOneByNftBlockIdAndVoucherContractAddress(nftBlockId: string, voucherContractAddress: string) {
    const voucher = await this.voucherRepository.findOneBy({ nftBlockId: nftBlockId, voucherContractAddress: voucherContractAddress });
    return voucher;
  }


  async upsert(voucherData: CreateVoucherDto) {

    return await this.voucherRepository.upsert(
      [
        { ...voucherData }
      ],
      ['nftBlockId']
    );
  }



  async update(
    id,
    voucherData: CreateVoucherDto,
  ) {

    return await this.voucherRepository.update({
      id
    },
      { 
        voucherId: voucherData.voucherId,
        voucherName: voucherData.voucherName,
        voucherDescription: voucherData.voucherDescription,
        voucherContractAddress: voucherData.voucherContractAddress,
        voucherValue: voucherData.voucherValue,
        voucherImageUrl: voucherData.voucherImageUrl,
        voucherContractSymbol: voucherData.voucherContractSymbol,
        nftBlockId: voucherData.nftBlockId,
        nftBlockMintedBlockAddress: voucherData.nftBlockMintedBlockAddress,
        brandId: voucherData.brandId,
        userId: voucherData.userId
      }
    );
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}
