import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BudgetDocument = Budget & Document;

@Schema()
export class Budget {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  income: number;

  @Prop({ type: [Number], default: [] })
  expenses: number[];

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
