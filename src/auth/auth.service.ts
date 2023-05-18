import { BadRequestException, Injectable, ForbiddenException, Logger } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
//import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async getLoyaltyUser(wallet: string, hash: string) {
    return this.usersService.getLoyaltyUser(wallet, hash);
  }

  async requesLoyaltyLogin(wallet: string) {
    return this.usersService.requesLoyaltyLogin(wallet);
  }

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    // Check if user exists
    const userExists = await this.usersService.getByWallet(
      createUserDto.walletAddress,
    );
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    Logger.log("newUser===================",createUserDto);
    // Hash password
   // const hash = await this.hashData(createUserDto.password);
    const newUser = await this.usersService.create({
      ...createUserDto,
    });

    Logger.log("created user ===================",createUserDto);


    const tokens = await this.getTokens(newUser.userId, newUser.walletAddress);
    await this.updateRefreshToken(newUser.userId, tokens.refreshToken);
    return tokens;
  }

	async signIn(data: AuthDto) {
    // Check if user exists
    const user = await this.usersService.getByWallet(data.walletAddress);
    Logger.log("user ==============", user);
    if (!user) throw new BadRequestException('User does not exist');
    //const passwordMatches = await argon2.verify(user.password, data.password);
    //if (!passwordMatches)
     // throw new BadRequestException('Password is incorrect');
    const tokens = await this.getTokens(user.userId, user.walletAddress);
    await this.updateRefreshToken(user.userId, tokens.refreshToken);
    return tokens;
  }

	async logout(userId: string) {
    return this.usersService.update(userId, { refreshToken: null });
  }

  hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(userId: string, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret:  process.env.JWT_ACCESS_SECRET,//this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: process.env.JWT_REFRESH_SECRET,//this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.getByID(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.userId, user.walletAddress);
    await this.updateRefreshToken(user.userId, tokens.refreshToken);
    return tokens;
  }


}