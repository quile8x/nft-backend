import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftFormService } from './gift-form.service';
import { CreateGiftFormDto } from './dto/create-gift-form.dto';
import { UpdateGiftFormDto } from './dto/update-gift-form.dto';

@Controller('gift-form')
export class GiftFormController {
  constructor(private readonly giftFormService: GiftFormService) {}

  @Post()
  create(@Body() createGiftFormDto: CreateGiftFormDto) {
    return this.giftFormService.create(createGiftFormDto);
  }

  @Get()
  findAll() {
    return this.giftFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftFormDto: UpdateGiftFormDto) {
    return this.giftFormService.update(+id, updateGiftFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftFormService.remove(+id);
  }
}
