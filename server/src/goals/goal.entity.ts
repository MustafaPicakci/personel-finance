import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GoalDocument = Goal & Document;

@Schema()
export class Goal {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  targetAmount: number;

  @Prop({ required: true })
  currentAmount: number;

  @Prop({ required: true })
  targetDate: Date;

  @Prop({ default: false })
  achieved: boolean;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
