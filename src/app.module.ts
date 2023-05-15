import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletContractModule } from './wallet-contract/wallet-contract.module';
import { GifNftModule } from './gif-nft/gif-nft.module';
import { GiftModule } from './gift/gift.module';
import { GiftRequestModule } from './gift-request/gift-request.module';
import { BrandModule } from './brand/brand.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { resolve } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }), 
    MongooseModule.forRoot(`${process.env.DB_MONGO}`),
    WalletContractModule,
    GifNftModule,
    GiftModule,
    GiftRequestModule,
    BrandModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    ServeStaticModule.forRoot({
      serveRoot: '/my/funny/cats',
      rootPath: `/home/user/some/path`,
    }),
    ServeStaticModule.forRoot(
      (() => {
          const servePath = '/.well-known/pki-validation';
          return {
              //rootPath: publicDir,
              rootPath: join(__dirname, '..', 'public/well-known/pki-validation'),
              // serveRoot - if you want to see files on another controller,
              // e.g.: http://localhost:8088/files/1.png
              serveRoot: servePath,
              exclude: ['/api*'],
          };
      })()
  ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .exclude('auth/(.*)')
      .forRoutes('/'); 
  }
}



