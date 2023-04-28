import { Module } from '@nestjs/common';
import { GiftRequestController } from './gift-request.controller';
import { GiftRequestService } from './gift-request.service';
import { GiftService } from '../gift/gift.service';


import { MongooseModule } from '@nestjs/mongoose';
import { GiftRequest, GiftRequestSchema } from './schema/gift-request.schema';
import { Gift, GiftSchema } from '../gift/schema/gift.schema';

@Module({
  controllers: [GiftRequestController],
  providers: [GiftRequestService, GiftService],
  imports: [
    MongooseModule.forFeature([{ name: GiftRequest.name, schema: GiftRequestSchema }]),
    MongooseModule.forFeature([{ name: Gift.name, schema: GiftSchema }]),
  ]
})
export class GiftRequestModule {}
