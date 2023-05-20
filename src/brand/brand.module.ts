import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
// import { Brand, BrandSchema } from './schema/brand.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';

import { UserService } from '../user/user.service';
// import { JwtService } from '@nestjs/jwt';
 import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [BrandController],
  providers: [BrandService, UserService],
  imports: [ 
    TypeOrmModule.forFeature([Brand, User]),
  ],
})
export class BrandModule {}
