import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletContractModule } from './wallet-contract/wallet-contract.module';
import { GifNftModule } from './gif-nft/gif-nft.module';
import { GiftModule } from './gift/gift.module';
import { GiftRequestModule } from './gift-request/gift-request.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    WalletContractModule,
    GifNftModule,
    GiftModule,
    GiftRequestModule,
    BrandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
