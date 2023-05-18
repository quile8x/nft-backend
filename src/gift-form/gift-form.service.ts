import { Injectable } from '@nestjs/common';
import { CreateGiftFormDto } from './dto/create-gift-form.dto';
import { UpdateGiftFormDto } from './dto/update-gift-form.dto';

@Injectable()
export class GiftFormService {
  create(createGiftFormDto: CreateGiftFormDto) {
    return 'This action adds a new giftForm';
  }

  findAll() {
    return `This action returns all giftForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giftForm`;
  }

  update(id: number, updateGiftFormDto: UpdateGiftFormDto) {
    return `This action updates a #${id} giftForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} giftForm`;
  }
}
