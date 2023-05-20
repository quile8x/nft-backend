import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { UserService } from 'src/user/user.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';

@Controller('api/brand')
export class BrandController {
  constructor(private readonly brandService: BrandService,
    private readonly userService: UserService
  ) { }


  @UseGuards(AccessTokenGuard)
  @Get("myList")
  async getListLoyaltyMembership(@Req() req: any) {

    const user: any = await this.userService.getByID(req.user['sub']);
    const loyaltyToken = user?.loyaltyToken;


    // Logger.log("req.user['sub']==å==============",loyaltyToken);
    // Logger.log("req.user['sub']================",user);
    // const json = await this.authService.decode(auth);
    // Logger.log("=============================", json);
    //const data = await this.service.findAll(json.uuid);

    return this.brandService.getListLoyaltyBrand(loyaltyToken);

  }


  // @Get()
  // async index() {
  //   return await this.brandService.findAll();
  // }

  // @Post()
  // create(@Body() createBrandDto: CreateBrandDto) {
  //   return this.brandService.create(createBrandDto);
  // }

  // @Get('/byWalleteAddress/:walletAddress')
  // async findByWalletAddress(@Param('walletAddress') walletAddress: string) {
  //   //console.log("----------",walletAddress);
  //   return await this.brandService.findByWalletAddress(walletAddress);
  // }



  // @Get('/byContractName/:contractName')
  // async findByContractName(@Param('contractName') contractName: string) {
  //   return await this.brandService.findByContractName(contractName);
  // }


  // @Get('/byContractAddress/:contractAddress')
  // async findByContractAddress(@Param('contractAddress') contractAddress: string) {
  //   return await this.brandService.findByContractAddress(contractAddress);

  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
  //   return await this.brandService.update(id, updateBrandDto);
  // }


}
