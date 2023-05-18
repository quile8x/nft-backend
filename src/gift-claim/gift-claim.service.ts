import { Injectable } from '@nestjs/common';
import { CreateGiftClaimDto } from './dto/create-gift-claim.dto';
import { UpdateGiftClaimDto } from './dto/update-gift-claim.dto';

@Injectable()
export class GiftClaimService {
  create(createGiftClaimDto: CreateGiftClaimDto) {
    return 'This action adds a new giftClaim';
  }

  findAll() {
    return `This action returns all giftClaim`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giftClaim`;
  }

  update(id: number, updateGiftClaimDto: UpdateGiftClaimDto) {
    return `This action updates a #${id} giftClaim`;
  }

  remove(id: number) {
    return `This action removes a #${id} giftClaim`;
  }
}
