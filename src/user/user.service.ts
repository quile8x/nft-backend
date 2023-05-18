// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User, UserDocument } from './schema/user.schema';
// import { Logger } from '@nestjs/common';

// @Injectable()
// export class UserService {
//   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

//   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
//     return await new this.userModel({
//       ...createUserDto,
//       createdAt: new Date(),
//     }).save();
//   }

//   async findAll(): Promise<UserDocument[]> {
//     return this.userModel.find().exec();
//   }

//   async findById(id: string): Promise<UserDocument> {
//     return this.userModel.findById(id);
//   }

//   async findByUsername(username: string): Promise<UserDocument> {
//     return this.userModel.findOne({ username }).exec();
//   }


//   async remove(id: string): Promise<UserDocument> {
//     return this.userModel.findByIdAndDelete(id).exec();
//   }
// }


import { HttpException, HttpStatus, Injectable, Logger, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService, HttpModule } from "@nestjs/axios";
import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";

import { catchError, firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { logger } from 'src/middlewares/log/logger.middleware';


@Injectable()
export class UserService {
  private readonly httpService = new HttpService();
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }


  async getLoyaltyUser( wallet: string, hash: string){

    const data = {
      wallet: wallet,
      hash: hash
    };

    let url = `${process.env.LOYALTY_API}/auth/login`;
    const options = {
      headers: { "content-type": "application/json" }
    }
    let rst =  null;
    let userObj: CreateUserDto = null;
    await axios.post(url, data, options).then(function (response) {
      rst = response.data;
      const {user, refreshToken} = rst;
      userObj =  {... user};
      userObj.loyatyRefreshToken = refreshToken;

      this.create(userObj);

      console.log(rst);
    }).catch((response) => {
      console.log(response);
    });
    return userObj;

  }

  async requesLoyaltyLogin( wallet: string){
    const data =  {
      wallet: wallet 
      }
    let url = `${process.env.LOYALTY_API}/auth/request-login`;
    const options = {
      headers: { "content-type": "application/json" }
    }
    let rst =  null;
  
    await axios.post(url, data, options).then(function (response) {
      rst = response.data;
    }).catch((response) => {
      console.log(response);
    });
    return rst;
  }



  // async getLoyaltyUser(wallet: string, hash: string) {

  //   let url = `${process.env.LOYALTY_API}/auth/login`;
  //   const data = {
  //     wallet: wallet,
  //     hash: hash
  //   };
  //   const options = {
  //     headers: { "content-type": "application/json" }
  //   }
  //   let rst: any = null;
  //   await axios.post(url, data, options).then(function (response) {
  //     rst = response.data;
  //     console.log(rst);
  //   }).catch((response) => {
  //     console.log(response);
  //   });

  //   return rst;

  // }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email: email });
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist ', HttpStatus.NOT_FOUND);
  }

  async getByID(userId: string) {
    const user = await this.usersRepository.findOneBy({ userId: userId });
    if (user) {
      return user;
    }
    throw new HttpException('User with this user ID does not exist', HttpStatus.NOT_FOUND);
  }

  async getByWallet(walletAddress: string) {
    const user = await this.usersRepository.findOneBy({ walletAddress: walletAddress });
    return user;
  }

  async create(userData: CreateUserDto) {
    Logger.log("userData===============", userData);
    const newUser = await this.usersRepository.create(userData);
    Logger.log("userData===============", newUser);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async update(
    userId,
    updateUserDto: UpdateUserDto,
  ) {
    return await this.usersRepository.update({
      userId
    }, {
      loyatyRefreshToken: updateUserDto.loyatyRefreshToken,
    });

  }
}