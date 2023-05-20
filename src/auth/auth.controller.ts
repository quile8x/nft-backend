import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  Logger
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto, LoginDTO, RequestLoginDTO } from './dto/auth.dto';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import { RefreshTokenGuard } from '../common/guards/refreshToken.guard'
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService, ) { }

  @Post("login")
  getLoyaltyUser(@Body() loginDTO: LoginDTO) {
    return this.authService.getLoyaltyUser(loginDTO.wallet, loginDTO.hash);
  }

  @Post("request-login")
  requestlogin(@Body() requestLoginDTO: RequestLoginDTO) {
    return this.authService.requesLoyaltyLogin(requestLoginDTO.wallet);
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    Logger.log("newUser===================", createUserDto);
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {

     Logger.log("req.user['sub']================",req.user)

    this.authService.logout(req.user['sub']);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }
}