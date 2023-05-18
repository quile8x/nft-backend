import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftFormDto } from './create-gift-form.dto';

export class UpdateGiftFormDto extends PartialType(CreateGiftFormDto) {}
