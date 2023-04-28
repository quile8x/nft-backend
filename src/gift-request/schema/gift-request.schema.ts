import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GiftRequestDocument = GiftRequest & Document;

@Schema()
export class GiftRequest {
  @Prop({ required: true })
  name: string;

  @Prop()
  phone?: string;

  @Prop()
  contractName?: string;

  @Prop()
  contractAddress?: string;

  @Prop()
  walletAddress?: string;

  @Prop()
  giftName?: string;

  @Prop()
  giftID?: string;

  @Prop()
  tokenID?: string;

  @Prop()
  tokenIndex?: string
  
  @Prop({ required: true })
  createdAt: Date;
}

export const GiftRequestSchema = SchemaFactory.createForClass(GiftRequest);