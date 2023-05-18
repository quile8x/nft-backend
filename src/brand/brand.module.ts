import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
// import { Brand, BrandSchema } from './schema/brand.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  imports: [ 
    TypeOrmModule.forFeature([Brand]),
  ],
})
export class BrandModule {}
