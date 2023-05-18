import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftClaimDto } from './create-gift-claim.dto';

export class UpdateGiftClaimDto extends PartialType(CreateGiftClaimDto) {}
