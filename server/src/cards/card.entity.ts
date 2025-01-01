import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @ApiProperty({ description: 'The name of the credit card' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ description: 'The due date for payments' })
  @Prop({ required: true })
  dueDate: Date;

  @ApiProperty({ description: 'The user ID associated with the card' })
  @Prop({ required: true })
  userId: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
