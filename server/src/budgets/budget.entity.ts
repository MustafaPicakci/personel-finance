import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type BudgetDocument = Budget & Document;

@Schema()
export class Budget {
  @ApiProperty({ description: 'The user ID associated with the budget' })
  @Prop({ required: true })
  userId: string;

  @ApiProperty({ description: 'The income amount' })
  @Prop({ required: true })
  income: number;

  @ApiProperty({ description: 'The list of expenses' })
  @Prop({
    type: [
      { amount: Number, dueDate: Date, installment: Number, cardId: String },
    ],
    default: [],
  })
  expenses: {
    amount: number;
    dueDate: Date;
    installment: number;
    cardId: string;
  }[];

  @ApiProperty({ description: 'The date when the budget was created' })
  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
