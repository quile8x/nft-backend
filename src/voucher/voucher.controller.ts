import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Logger, Req,
  UseGuards } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { AuthService } from '../auth/auth.service';
import { UserService } from 'src/user/user.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';

@Controller('api/voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService,
    private readonly authService: AuthService,
    private readonly userService: UserService
    ) {}

  @Post()
  create(@Body() createVoucherDto: CreateVoucherDto) {
    return this.voucherService.create(createVoucherDto);
  }

  @Get()
  findAll() {
    return this.voucherService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get("myList")
  async getListLoyaltyVourcher(@Req() req: any) {
    const user: any = await this.userService.getByID(req.user['sub'])
    const loyaltyToken = user?.loyaltyToken;


   // Logger.log("req.user['sub']================",loyaltyToken);


   // Logger.log("req.user['sub']================",user);
    // const json = await this.authService.decode(auth);
    // Logger.log("=============================", json);
    //const data = await this.service.findAll(json.uuid);
    return this.voucherService.getListLoyaltyVourcher(loyaltyToken);
  }




  @Get(':id')
  findOne(@Param('id') id: string) {
    //return this.voucherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherDto: UpdateVoucherDto) {
    //return this.voucherService.update(+id, updateVoucherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return this.voucherService.remove(+id);
  }
}
