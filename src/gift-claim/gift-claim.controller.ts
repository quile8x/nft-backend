import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftClaimService } from './gift-claim.service';
import { CreateGiftClaimDto } from './dto/create-gift-claim.dto';
import { UpdateGiftClaimDto } from './dto/update-gift-claim.dto';

@Controller('gift-claim')
export class GiftClaimController {
  constructor(private readonly giftClaimService: GiftClaimService) {}

  @Post()
  create(@Body() createGiftClaimDto: CreateGiftClaimDto) {
    return this.giftClaimService.create(createGiftClaimDto);
  }

  @Get()
  findAll() {
    return this.giftClaimService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftClaimService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftClaimDto: UpdateGiftClaimDto) {
    return this.giftClaimService.update(+id, updateGiftClaimDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftClaimService.remove(+id);
  }
}
