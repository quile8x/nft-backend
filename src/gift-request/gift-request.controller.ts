import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Logger,
} from '@nestjs/common';
import { CreateGiftRequestDto } from './dto/create-gift-request.dto';
import { UpdateGiftRequestDto } from './dto/update-gift-request.dto';
import { GiftRequestService } from './gift-request.service';
import { GiftService } from './../gift/gift.service';


@Controller('gift-request')
export class GiftRequestController {

  constructor(private readonly service: GiftRequestService, private readonly giftService: GiftService) { }

  @Get()
  async index() {
    return await this.service.findAll();
  }


  @Get('/byContractName/:contractName')
  async findByContractName(@Param('contractName') contractName: string) {
    return await this.service.findByContractName(contractName);
  }


  @Get('/byContractAddress/:contractAddress')
  async findByContractAddress(@Param('contractAddress') contractAddress: string) {
    return await this.service.findByContractAddress(contractAddress);
  }


  @Get('/byWalleteAddress/:walletAddress')
  async findByWalletAddress(@Param('walletAddress') walletAddress: string) {
    return await this.service.findByWalletAddress(walletAddress);
  }


  @Get('/byName/:name')
  async findByName(@Param('name') name: string) {
    return await this.service.findByName(name);
  }


  @Get('/byPhone/:phone')
  async findByPhone(@Param('phone') phone: string) {
    return await this.service.findByPhone(phone);
  }


  // @Get('/checkCanClaimGift/:walletAdd/:contractAddress/:tokenID')
  // async checkCanClaimGift(@Param('walletAddress') walletAddress: string, @Param('contractAddress') contractAddress: string, @Param('tokenID') tokenID: string) {

  //   const listGifts =  await this.giftService.findByContractAddress(contractAddress);
  //   if(listGifts.length == 0) {
  //     return false;
  //   }else {
  //     const listAddress =  await this.service.findByWalletAndContract(walletAddress, contractAddress);
  //     if(listAddress.length == 0) {
  //       return  true;
  //     }else {
  //       return false;
  //      // const rsl =  await this.service.findByWalletAndContract(walletAddress, contractAddress);
  //     }
  //   }
  // }


  @Get('/checkCanClaimGift/:walletAddress/:contractAddress/:tokenID')
  async checkCanClaimGift(@Param('walletAddress') walletAddress: string, @Param('contractAddress') contractAddress: string, @Param('tokenID') tokenID: string) {

    const listGifts = await this.giftService.findByContractAddress(contractAddress);
    Logger.log("listGifts=======", listGifts);
    //return listGifts;
    if (listGifts.length == 0) {
      return false;
    } else {
      const listTokenID = await this.service.findByContractAndTokenID(contractAddress, tokenID);
      if (listTokenID.length > 0) {
        return false;
      } else {
        const listAddress = await this.service.findByWalletAndContract(walletAddress, contractAddress);
        if (listAddress.length == 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }


  // @Get('/checkCanClaimGift/:walletAddress/:contractAddress')
  // async checkCanClaimGift(@Param('walletAddress') walletAddress: string, @Param('contractAddress') contractAddress: string) {

  //   const listGifts =  await this.giftService.findByContractAddress(contractAddress);
  //   if(listGifts.length == 0) {
  //     return false;
  //   }else {
  //     //console.log("=========================================",walletAddress,contractAddress);
  //     const listAddress =  await this.service.findByWalletAndContract(walletAddress, contractAddress);
  //     if(listAddress.length == 0) {
  //       return  true;
  //     }else {
  //       return false;
  //      // const rsl =  await this.service.findByWalletAndContract(walletAddress, contractAddress);
  //     }
  //   }
  // }



  // @Get('/checkReceiveGift/:walletAdd/:contractAddress/:tokenID')
  // async checkReceiveGift(@Param('walletAddress') walletAddress: string, @Param('contractAddress') contractAddress: string, @Param('tokenID') tokenID: string) {
  //   const rsl =  await this.service.findByWalletAndContract(walletAddress, contractAddress);
  //   if(rsl) {
  //   }
  // }

  @Post('')
  async create(@Body() createGiftRequestDto: CreateGiftRequestDto) {
    return await this.service.create(createGiftRequestDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGiftRequestDto: UpdateGiftRequestDto) {
    return await this.service.update(id, updateGiftRequestDto);
  }

}