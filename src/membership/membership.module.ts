import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
//import { User, UserSchema } from './schema/user.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from './entities/membership.entity';

import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
// import { JwtService } from '@nestjs/jwt';
 import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Membership, User]),
  ],
  controllers: [MembershipController],
  providers: [MembershipService, UserService]
})
export class MembershipModule {}
