import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type GoalDocument = Goal & Document;

@Schema()
export class Goal {
  @ApiProperty({ description: 'The user ID associated with the goal' })
  @Prop({ required: true })
  userId: string;

  @ApiProperty({ description: 'The target amount for the goal' })
  @Prop({ required: true })
  targetAmount: number;

  @ApiProperty({ description: 'The current amount saved towards the goal' })
  @Prop({ required: true })
  currentAmount: number;

  @ApiProperty({ description: 'The target date for achieving the goal' })
  @Prop({ required: true })
  targetDate: Date;

  @ApiProperty({ description: 'Indicates if the goal has been achieved' })
  @Prop({ default: false })
  achieved: boolean;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
