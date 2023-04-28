import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { Gift, GiftSchema } from './schema/gift.schema';

@Module({
  providers: [GiftService],
  controllers: [GiftController],
  imports: [
    MongooseModule.forFeature([{ name: Gift.name, schema: GiftSchema }]),
  ],
})
export class GiftModule {}
