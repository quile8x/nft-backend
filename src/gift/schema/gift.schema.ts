import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GiftDocument = Gift & Document;

@Schema()
export class Contract {
  @Prop()
  name: string;
  @Prop()
  address: string;
}
// Generate a Mongoose Schema before use as Subdocument
const ContractSchema = SchemaFactory.createForClass(Contract);


@Schema()
export class Gift {
  @Prop({ required: true })
  title: string;

  @Prop()
  des?: string;

  @Prop()
  contractName?: string;

  @Prop()
  contractAddress?: string;

  @Prop({ type: [ContractSchema] })
  contracts?: Contract[];

  @Prop()
  urlImage?: string;

  @Prop()
  isClaim?: boolean;

  @Prop({ required: true })
  createdAt: Date;
}

export const GiftSchema = SchemaFactory.createForClass(Gift);




