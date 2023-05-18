import { Module } from '@nestjs/common';
import { GiftAssignmentService } from './gift-assignment.service';
import { GiftAssignmentController } from './gift-assignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftAssignment } from './entities/gift-assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GiftAssignment]),
  ],  
  controllers: [GiftAssignmentController],
  providers: [GiftAssignmentService]
})
export class GiftAssignmentModule {}
