import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateWalletContractDto } from './dto/create-wallet-contract.dto';
  import { WalletContractService } from './wallet-contract.service';


@Controller('wallet-contract')
export class WalletContractController {
    constructor(private readonly service: WalletContractService) {}

    @Get('/:walletAddress')
    async find(@Param('walletAddress') walletAddress: string) {
      return await this.service.findByWalletAddress(walletAddress);
    }
  
    @Post('')
    async create(@Body() createWalletContractDto: CreateWalletContractDto) {
      return await this.service.create(createWalletContractDto);
    }
  
  }