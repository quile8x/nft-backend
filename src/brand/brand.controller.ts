import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) { }

  @Get()
  async index() {
    return await this.brandService.findAll();
  }

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get('/byWalleteAddress/:walletAddress')
  async findByWalletAddress(@Param('walletAddress') walletAddress: string) {
    //console.log("----------",walletAddress);
    return await this.brandService.findByWalletAddress(walletAddress);
  }



  @Get('/byContractName/:contractName')
  async findByContractName(@Param('contractName') contractName: string) {
    return await this.brandService.findByContractName(contractName);
  }

  
  @Get('/byContractAddress/:contractAddress')
  async findByContractAddress(@Param('contractAddress') contractAddress: string) {
    return await this.brandService.findByContractAddress(contractAddress);

  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return await this.brandService.update(id, updateBrandDto);
  }


}
