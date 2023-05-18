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
import { LoggerMiddleware } from './middlewares/log/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherModule } from './voucher/voucher.module';
import { GiftFormModule } from './gift-form/gift-form.module';
import { MembershipModule } from './membership/membership.module';
import { GiftAssignmentModule } from './gift-assignment/gift-assignment.module';
import { GiftClaimModule } from './gift-claim/gift-claim.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }), 
    MongooseModule.forRoot(`${process.env.DB_MONGO}`),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,

      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      synchronize: true,
    }),
    WalletContractModule,
    GifNftModule,
    GiftModule,
    GiftRequestModule,
    BrandModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
  //   ServeStaticModule.forRoot({
  //     serveRoot: '/my/funny/cats',
  //     rootPath: `/home/user/some/path`,
  //   }),
  //   ServeStaticModule.forRoot(
  //     (() => {
  //         const servePath = '/.well-known/pki-validation';
  //         return {
  //             //rootPath: publicDir,
  //             rootPath: join(__dirname, '..', 'public/well-known/pki-validation'),
  //             // serveRoot - if you want to see files on another controller,
  //             // e.g.: http://localhost:8088/files/1.png
  //             serveRoot: servePath,
  //             exclude: ['/api*'],
  //         };
  //     })()
  // ),
    AuthModule,
    UserModule,
    VoucherModule,
    GiftFormModule,
    MembershipModule,
    GiftAssignmentModule,
    GiftClaimModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .exclude('api/auth/(.*)')
      .forRoutes('/'); 
  }
}



