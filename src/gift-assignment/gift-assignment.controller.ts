import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftAssignmentService } from './gift-assignment.service';
import { CreateGiftAssignmentDto } from './dto/create-gift-assignment.dto';
import { UpdateGiftAssignmentDto } from './dto/update-gift-assignment.dto';

@Controller('gift-assignment')
export class GiftAssignmentController {
  constructor(private readonly giftAssignmentService: GiftAssignmentService) {}

  @Post()
  create(@Body() createGiftAssignmentDto: CreateGiftAssignmentDto) {
    return this.giftAssignmentService.create(createGiftAssignmentDto);
  }

  @Get()
  findAll() {
    return this.giftAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftAssignmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftAssignmentDto: UpdateGiftAssignmentDto) {
    return this.giftAssignmentService.update(+id, updateGiftAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftAssignmentService.remove(+id);
  }
}
