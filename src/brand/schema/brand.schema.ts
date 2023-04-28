import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
  @Prop({ required: true })
  name: string;

  @Prop()
  walletAddress?: string;

  @Prop()
  contractName?: string;

  @Prop()
  contractAddress?: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
