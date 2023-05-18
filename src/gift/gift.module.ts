import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
//import { Gift, GiftSchema } from './schema/gift.schema';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Gift } from './entities/gift.entity';

@Module({
  // providers: [GiftService],
  // controllers: [GiftController],
  imports: [
    TypeOrmModule.forFeature([Gift]),
   // MongooseModule.forFeature([{ name: Gift.name, schema: GiftSchema }]),
  ],
})
export class GiftModule {}
