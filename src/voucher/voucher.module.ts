import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Voucher, User]),
  ],
  controllers: [VoucherController],
  providers: [VoucherService, AuthService, UserService, JwtService]
})
export class VoucherModule {}
