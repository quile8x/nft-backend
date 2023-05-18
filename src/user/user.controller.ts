import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import { Logger } from '@nestjs/common';
import { hash } from 'argon2';


 class RequestLoginDTO {
  wallet?: string;
}

class LoginDTO {
  wallet?: string;
  hash?: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post("getLoyaltyUser")
  getLoyaltyUser(@Body() loginDTO: LoginDTO) {
    return this.userService.getLoyaltyUser(loginDTO.wallet, loginDTO.hash);
  }

  @Post("request-login")
  requestlogin(@Body() requestLoginDTO: RequestLoginDTO) {
    return this.userService.requesLoyaltyLogin(requestLoginDTO.wallet);
  }

//   @Get()
//   findAll() {
//     return this.userService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.userService.findById(id);
//   }

//   @UseGuards(AccessTokenGuard)
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.update(id, updateUserDto);
//   }

//   @UseGuards(AccessTokenGuard)
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.remove(id);
//   }
 }
