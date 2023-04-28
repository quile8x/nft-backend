import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WalletContractDocument = WalletContract & Document;

@Schema()
export class WalletContract {
  @Prop({ required: true })
  walletAddress: string;

  @Prop()
  contractAddress?: string;

  @Prop()
  contractName?: string;

  @Prop()
  tokenID?: string;

  @Prop()
  tokenHash?: string;

  @Prop()
  tokenIndex?: string;

  @Prop()
  isOwner?: boolean;

  @Prop({ required: true })
  createdAt: Date;

}

export const WalletContractSchema = SchemaFactory.createForClass(WalletContract);