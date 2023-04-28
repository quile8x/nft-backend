import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GiftNftDocument = GiftNft & Document;

@Schema()
export class GiftNft {
  @Prop({ required: true })
  walletAddress: string;

  @Prop()
  contractAddress?: string;

  @Prop()
  contractName?: string;

  @Prop()
  hash?: string;

  @Prop()
  tokenID?: string;

  @Prop()
  isClaim?: boolean;

  @Prop({ required: true })
  createdAt: Date;
}

export const GiftNftSchema = SchemaFactory.createForClass(GiftNft);