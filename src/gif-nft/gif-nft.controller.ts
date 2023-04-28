import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateGiftNftDto } from './dto/create-gift-nft.dto';
  import { UpdateGiftNftDto } from './dto/update-gift-nft.dto';
  import { GifNftService } from './gif-nft.service';


@Controller('gift-nft')
export class GifNftController {
    constructor(private readonly service: GifNftService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }

    @Get('/:isClaim')
    async find(@Param('isClaim') isClaim: boolean) {
      return await this.service.findByIsNotClaim(isClaim);
    }

    @Post('')
    async create(@Body() createGiftNftDto: CreateGiftNftDto) {
      return await this.service.create(createGiftNftDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateGiftNftDto: UpdateGiftNftDto) {
      return await this.service.update(id, updateGiftNftDto);
    }
  
  }