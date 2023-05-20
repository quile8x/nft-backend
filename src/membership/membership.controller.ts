import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';

import { UserService } from 'src/user/user.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';

@Controller('api/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService,
    private readonly userService: UserService
    )
   {}


  @UseGuards(AccessTokenGuard)
  @Get("myList")
  async getListLoyaltyMembership(@Req() req: any) {
    const user: any = await this.userService.getByID(req.user['sub'])
    const loyaltyToken = user?.loyaltyToken;


   // Logger.log("req.user['sub']================",loyaltyToken);


   // Logger.log("req.user['sub']================",user);
    // const json = await this.authService.decode(auth);
    // Logger.log("=============================", json);
    //const data = await this.service.findAll(json.uuid);
    return this.membershipService.getListLoyaltyMembership(loyaltyToken);
  }

  // @Post()
  // create(@Body() createMembershipDto: CreateMembershipDto) {
  //   return this.membershipService.create(createMembershipDto);
  // }

  // @Get()
  // findAll() {
  //   return this.membershipService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.membershipService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMembershipDto: UpdateMembershipDto) {
  //   return this.membershipService.update(+id, updateMembershipDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.membershipService.remove(+id);
  // }
}
