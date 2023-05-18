import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftAssignmentDto } from './create-gift-assignment.dto';

export class UpdateGiftAssignmentDto extends PartialType(CreateGiftAssignmentDto) {}
