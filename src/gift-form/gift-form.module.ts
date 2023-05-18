import { Module } from '@nestjs/common';
import { GiftFormService } from './gift-form.service';
import { GiftFormController } from './gift-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftForm } from './entities/gift-form.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GiftForm]),
  ],  
  controllers: [GiftFormController],
  providers: [GiftFormService]
})
export class GiftFormModule {}
