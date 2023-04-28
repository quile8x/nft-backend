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
  import { CreateGiftDto } from './dto/create-gift.dto';
  import { UpdateGiftDto } from './dto/update-gift.dto';
  import { GiftService } from './gift.service';


@Controller('gift')
export class GiftController {
    constructor(private readonly service: GiftService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }


    @Get("/:ID")
    async findByID(@Param('ID') ID: string) {
      return await this.service.findOne(ID);
    }

    
    @Get('/byContractName/:contractName')
    async findByContractName(@Param('contractName') contractName: string) {
      return await this.service.findByContractName(contractName);
    }


    @Get('/byContractAddress/:contractAddress')
    async findByContractAddress(@Param('contractAddress') contractAddress: string) {
      return await this.service.findByContractAddress(contractAddress);
    }


    @Get('/:isClaim')
    async find(@Param('isClaim') isClaim: boolean) {
      return await this.service.findByIsNotClaim(isClaim);
    }

    @Post('')
    async create(@Body() createGiftDto: CreateGiftDto) {
      return await this.service.create(createGiftDto);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateGiftDto: UpdateGiftDto) {
      Logger.log("updateGiftDto========xx=======", updateGiftDto);
      return await this.service.update(id, updateGiftDto);
    }
  
  }