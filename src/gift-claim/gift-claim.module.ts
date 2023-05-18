import { Module } from '@nestjs/common';
import { GiftClaimService } from './gift-claim.service';
import { GiftClaimController } from './gift-claim.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftClaim } from './entities/gift-claim.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GiftClaim]),
  ],  
  controllers: [GiftClaimController],
  providers: [GiftClaimService]
})
export class GiftClaimModule {}
