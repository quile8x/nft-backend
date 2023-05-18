import { Injectable } from '@nestjs/common';
import { CreateGiftAssignmentDto } from './dto/create-gift-assignment.dto';
import { UpdateGiftAssignmentDto } from './dto/update-gift-assignment.dto';

@Injectable()
export class GiftAssignmentService {
  create(createGiftAssignmentDto: CreateGiftAssignmentDto) {
    return 'This action adds a new giftAssignment';
  }

  findAll() {
    return `This action returns all giftAssignment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giftAssignment`;
  }

  update(id: number, updateGiftAssignmentDto: UpdateGiftAssignmentDto) {
    return `This action updates a #${id} giftAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} giftAssignment`;
  }
}
