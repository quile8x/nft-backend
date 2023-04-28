import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GifNftService } from './gif-nft.service';
import { GifNftController } from './gif-nft.controller';
import { GiftNft, GiftNftSchema } from './schema/gift-nft.schema';

@Module({
  providers: [GifNftService],
  controllers: [GifNftController],
  imports: [
    MongooseModule.forFeature([{ name: GiftNft.name, schema: GiftNftSchema }]),
  ],
})
export class GifNftModule {}
